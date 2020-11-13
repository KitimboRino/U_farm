const express = require('express');
const router = express.Router();
const urbfarmer = require('../models/urbanReg');

// router.get('/farmeronelogin', (req,res) =>{
// //     res.render('farmeroneLogin')
// // });

router.get('/urbanFReg', (req, res) => {
  res.render('urbanReg', { title: 'Urban Farmer registration' });
});

// Save data to database (GEt all route)
// Post gets information from form
router.post('/urbanFReg', async (req, res) => {
  console.log(req.body);
  try {
    const items = new urbfarmer(req.body);

    await urbfarmer.register(items, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect('/uflogin');
    });
  } catch (err) {
    // .catch is a promise and used because nodejs asynchronously awaits
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});

router.post('/delete', async (req, res) => {
  // If user has session reorded
  if (req.session.user) {
    try {
      await urbfarmer.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.status(400).send('unable to delete item in the database');
    }
    // Otherwise redirect the user back to login
  } else {
    console.log("Can't find session");
    res.redirect('/uflogin');
  }
});

router.post('/update', async (req, res) => {
  if (req.session.user) {
    try {
      await urbfarmer.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect('uFarmList');
    } catch (err) {
      res.status(404).send('Unable to update item in the database');
    }
  } else {
    console.log("can't find session");
    res.redirect('/uflogin');
  }
});

module.exports = router;
