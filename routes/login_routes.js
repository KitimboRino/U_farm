const express = require('express');
const router = express.Router();
const passport = require('passport');
const roles = require('../roles');

// Gets displays a login page
// get for rendering the login for FO
router.get('/login', (req, res) => {
  res.render('login', { title: 'Login Form' });
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
      res.redirect('/fOneDash');
    } else userRole == 'urbFarmers';
    {
      res.redirect('/urbanfarmDash');
    }
  }
);

// Urban farmer
// // get for rendering the login for UF
// router.get('/uflogin', (req, res) => {
//   res.render('UFlogin');
// });

// // Process the username and password that are submitted in the login page
// router.post('/uflogin', passport.authenticate('local'), (req, res) => {
//   req.session.user = req.user;
//   res.redirect('/uFList');
// });

module.exports = router;
