const express = require('express');
const router = express.Router();
const passport = require('passport');
const roles = require('../roles');

// Login page
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Form' });
});

// Farmer One List
router.get('/fOneList', (req, res) => {
  res.render('farmerOneList', { title: 'Farmer One' });
});

// Process the username and password that are submitted in the login page
router.post(
  '/login', passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user;
    const userRole = roles[req.user.role];

    if (userRole == 'agricOfficer') {
      res.redirect('/fOneList');
    } 
    else if (userRole == 'farmOne') {
      res.redirect('/uFarmList');
    } 
    else (userRole == 'urbFarmers');
    {
      res.redirect('/uProdUpload');
    }
  }
);

module.exports = router;
