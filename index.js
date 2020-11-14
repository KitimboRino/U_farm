// Initiate Application.
//Module dependencies.
const express = require('express');
const path = require('path');
const bodyParser = require('body-Parser');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// Create an express application by calling the express function.(Instantiating)
const app = express();

//Path declarations
const agricOfficerRoute = require('./routes/agricOfficerRoutes');
const farmerOneRoute = require('./routes/farmerOneRoutes');
const urbanFarmer = require('./routes/urbanFarmerRoutes');
const customers = require('./routes/customer');
const userLogin = require('./routes/login_routes');
const farmerOne = require('./models/farmOneReg');

require('dotenv/config');

const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});
const passport = require('passport');


// Connect to MongoDB.
// Add { userNewUrlParser} to remove errors.
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
// Loading view templete engine.(installing pug pt2)
app.set('view engine', 'pug');
// Setting view files i.e pug/ html in a directory called views.
app.set('views', path.join(__dirname, 'views'));

// Middleware settings
// Simple request time logger (Add to project).
app.use((req, res, next) => {
  console.log('A new request received at ' + Date.now());
//   // This function call tells that more processing is
//   // required for the current request and is in the next middleware
//   // function/route handler.
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
// Setting public folder access.
app.use(express.static('public'));

/*  PASSPORT SETUP  */
app.use(expressSession);
// initializing passport with its session authentication
app.use(passport.initialize());
app.use(passport.session());

// passport configs
passport.use(farmerOne.createStrategy());
passport.serializeUser(farmerOne.serializeUser());
passport.deserializeUser(farmerOne.deserializeUser());

// app.get('/', (req, res) => {
//   // __dirname is the path to current working directory
//   res.sendFile(__dirname + 'index.html');
// });

// Using imported routes arranged below the body perser & config
// Farmer One
app.use('/', farmerOneRoute);
// Agricultural Officer.
app.use('/', agricOfficerRoute);
// Urban Farmer
app.use('/', urbanFarmer);
// Customer
app.use('/', customers);
// Login
app.use('/', userLogin);

// Routes......
// Home page route.
app.get('/index', (req, res) => {
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

// Creates error when non existent path is selected, so we need to cater for soome of these in the project.
app.get('*', (req, res) => {
  res.send('error page');
});

// Listen. Created a server and it listens to port: 3000
app.listen(3000, () => {
  console.log('listening on port 3000');
});
