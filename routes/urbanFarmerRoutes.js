const express = require('express');
const router = express.Router();
const urbfarmer = require('../models/urbanReg');
const Users = require('../models/Users');

// router.get('/farmeronelogin', (req,res) =>{
// //     res.render('farmeroneLogin')
// // });

router.get('/urbanFReg', (req, res) => {
  res.render('urbanReg', { title: 'Urban Farmer registration' });
});

// save data to the database
router.post('/urbanFReg', async (req, res) => {
  try {
    const user = new Users(req.body);
    const items = new urbfarmer(req.body);
    await items.save();
    await Users.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      console.log('save success');
      res.redirect('/uFarmlist');
    });
  } catch (err) {
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});

router.get('/uFarmList', async (req, res) => {
  // Added a check
  if (req.session.user) {
    try {
      let items = await urbfarmer.find();
      if (req.query.gender) {
        items = await urbfarmer.find({ gender: req.query.gender });
      }
      res.render('urbanFarmerList', {
        title: 'Urban Farmer List',
        users: items,
        currentUser: req.session.user,
      });
    } catch (err) {
      res.status(400).send('Unable to find items in the database');
    }
  } else {
    console.log("can't find session");
    res.redirect('/login');
  }
});

router.post('/uFarmdelete', async (req, res) => {
  if (req.session.user) {
    try {
      await urbfarmer.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.status(400).send('Unable to delete item in the database');
    }
  } else {
    console.log('cant find session');
    res.redirect('/login');
  }
});

// find the details of the user using the id that has benn passed through the parama
router.get('/uFarmUpdate/:id', async (req, res) => {
  if (req.session.user) {
    try {
      const updateUser = await urbfarmer.findOne({ _id: req.params.id });
      res.render('ufListUpdate', { user: updateUser });
    } catch (err) {
      res.status(400).send('Unable to find item in the database');
    }
  } else {
    console.log("Can't find session");
    res.redirect('/login');
  }
});

router.post('/uFarmUpdate', async (req, res) => {
  if (req.session.user) {
    try {
      await urbfarmer.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect('ufListUpdate');
    } catch (err) {
      res.status(404).send('Unable to update item in the database');
    }
  } else {
    console.log("can't find session");
    res.redirect('/login');
  }
});

module.exports = router;
