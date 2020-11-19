// Initiate Application.
//Module dependencies.
const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
// body-parser middleware, which will help us parse the body of our requests
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
// Create an express application by calling the express function.(Instantiating)
const app = express();

//Path declarations

const farmerOne = require('./routes/farmerOneRoutes');
const urbanFarmer = require('./routes/urbanFarmerRoutes');
const produce = require('./routes/produceRoutes');
const userLogin = require('./routes/login_routes');
const Users = require('./models/Users');

// 
require('dotenv/config');

  //  express-session middleware to help us save the session cookie.
const expressSession = require('express-session')({
  // to sign the session ID cookie
  secret: 'secret',
  // Forces the session to be saved back to the session store
  resave: false,
  // Forces a session that is “uninitialized” to be saved to the store
  saveUninitialized: false,
});
const passport = require('passport');

// Connect to MongoDB.
// Add { useNewUrlParser} to remove errors.
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
// Loading view templete engine.
app.set('view engine', 'pug');
// Setting view files i.e pug in a directory called views.
app.set('views', path.join(__dirname, 'views'));

// Middleware settings
// Simple request time logger.
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
  // This function call tells that more processing is
  // required for the current request and is in the next middleware
  // function/route handler.
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// Setting public folder access.
app.use(express.static('public'));

/*  PASSPORT SETUP  */
app.use(expressSession);
// initializing passport with its session authentication middleware
app.use(passport.initialize());
app.use(passport.session());

// passport configs
passport.use(Users.createStrategy());
//invoked on authentication, and is to serialize the user instance with the information we pass on to it and store it in the session via a cookie
passport.serializeUser(Users.serializeUser());
//invoked every subsequent request to deserialize the instance, providing it the unique cookie identifier as a “credential”
passport.deserializeUser(Users.deserializeUser());


// app.get('/', (req, res) => {
//   // __dirname is the path to current working directory
//   res.sendFile(__dirname + 'index.html');
// });

// Using imported routes arranged below the body perser & config
// Farmer One
app.use('/', farmerOne);
// Urban Farmer
app.use('/', urbanFarmer);
//produce
app.use('/', produce);
// Login
app.use('/', userLogin);

// Route
// Home page route.
app.get('/index', (req, res) => {
  // Picks up the page/ connects to page(index)
  res.render('index');
});


// logout, call back checking if there is a session
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

// Creates error when non existent path is selected, so we need to cater for some of these in the project.
app.get('*', (req, res) => {
  res.send('error page');
});

// Listen. Created a server and it listens to port: 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
