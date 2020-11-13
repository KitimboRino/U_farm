const express = require('express');
const router = express.Router();
const passport = require('passport');

// Gets displays a login page
// get for rendering the login for FO
router.get('/login', (req, res) => {
  res.render('login');
});

// Process the username and password that are submitted in the login page
router.post('/login', passport.authenticate('local'), (req, res) => {
  req.session.user = req.user;
  res.redirect('/fOneList');
});

// Urban farmer
// get for rendering the login for UF
router.get('/uflogin', (req, res) => {
  res.render('UFlogin');
});

// Process the username and password that are submitted in the login page
router.post('/uflogin', passport.authenticate('local'), (req, res) => {
  req.session.user = req.user;
  res.redirect('/uFList');
});


module.exports = router;
