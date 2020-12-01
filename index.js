// Initiate Application.
//Module dependencies.
const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// Create an express application by calling the express function.(Instantiating)
const app = express();

//Import Routes
const farmerOne = require('./routes/farmerOneRoutes');
const urbanFarmer = require('./routes/urbanFarmerRoutes');
const produce = require('./routes/produceRoutes');
const userLogin = require('./routes/login_routes');
const Users = require('./models/Users');

// Module that loads the db variables from the .env file into the process env
require('dotenv/config');
// Express-session middleware to help us save the session cookie.
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
const passport = require('passport');

// Connect to MongoDB.
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

// Configurations
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Middleware settings.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(expressSession);

// initializing passport with its session authentication middleware
app.use(passport.initialize());
app.use(passport.session());

// Passport configuration.
passport.use(Users.createStrategy());
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

// (Custom middleware )Using imported routes
app.use('/', farmerOne);
app.use('/', urbanFarmer);
app.use('/', produce);
app.use('/', userLogin);

// Request time logger.
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  next();
});

// Home page route.
app.get('/index', (req, res) => {
  res.render('index');
});

// Logout, call back checking if there is a session
app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        // failed to destroy session
      } else {
        return res.redirect('/login');
      }
    });
  }
});

//Error non existent path.
app.get('*', (req, res) => {
  res.send('404 Oops, it looks like the page doesnt exist');
});

//Created a server
app.listen(3000, () => {
  console.log('listening on port 3000');
});
