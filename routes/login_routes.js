const express = require('express');
const router = express.Router();
const passport = require('passport');
const roles = require('../roles');

// Gets displays a login page
// get for rendering the login for FO
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Form' });
});

router.get('/fOneList', (req, res) => {
  res.render('farmerOneList', { title: 'Farmer One' });
});

// Process the username and password that are submitted in the login page
router.post(
  '/login',
  passport.authenticate('local', { failureRedirect: '/login' }),
  (req, res) => {
    req.session.user = req.user;
    const userRole = roles[req.user.role];

    if (userRole == 'agricOfficer') {
      res.redirect('/fOneList');
    } else if (userRole == 'farmOne') {
      res.redirect('/fOneList');
    } else userRole == 'urbFarmers';
    {
      res.redirect('/uFarmList');
    }
  }
);

module.exports = router;
