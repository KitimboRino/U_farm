const express = require('express');
const router = express.Router();
const farmerOne = require('../models/farmOneReg');
const Users = require('../models/Users');

// Route for market
router.get('/marketShop', (req, res) => {
  res.render('marketShop', { title: 'Market' });
});

// Route for cart
router.get('/cart', (req, res) => {
  res.render('cart', { title: 'Cart' });
});

// Get reads the farmOneReg.pug and displays it on the path
router.get('/farmerOneReg', (req, res) => {
  res.render('farmOneReg', { title: 'Farmer One Registration' });
});

// save data to database.
router.post('/farmerOneReg', async (req, res) => {
  try {
    const user = new Users(req.body);
    const items = new farmerOne(req.body);
    await items.save();
    await Users.register(user, req.body.password, (err) => {
      if (err) {
        throw err;
      }
      res.redirect('/fOneList');
    });
    console.log('save success');
    res.redirect('/fOneList');
  } catch (err) {
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});

// Retrieve data from the database;
router.get('/fOneList', async (req, res) => {
  if (req.session.user) {
    // Allows you to define a block of code to be tested for errors while it is being executed
    try {
      let items = await farmerOne.find();
      if (req.query.ward) {
        items = await farmerOne.find({ ward: req.query.ward });
      }
      res.render('farmerOneList', {
        title: 'Farmer One Dashboard',
        users: items,
        currentUser: req.session.user,
      });
      // Allows you to define a block of code to be executed, if an error occurs in the try block
    } catch (err) {
      res.status(400).send('Unable to find items in the database');
    }
  } else {
    console.log("can't find session");
    res.redirect('/login');
  }
});

// Find the details of the user using the id that has been passed using params.
router.get('/foUpdate/:id', async (req, res) => {
  if (req.session.user) {
    try {
      const updateUser = await farmerOne.findOne({ _id: req.params.id });
      res.render('foListUpdate', { user: updateUser });
    } catch (err) {
      res.status(400).send('Unable to find item in the database');
    }
  } else {
    console.log("Can't find session");
    res.redirect('/login');
  }
});

//Find the details of the user and update
router.post('/foUpdate', async (req, res) => {
  if (req.session.user) {
    try {
      await farmerOne.findOneAndUpdate({ _id: req.query.id }, req.body);
      res.redirect('fOneList');
    } catch (err) {
      res.status(404).send('Unable to update item in the database');
    }
  } else {
    console.log("can't find session");
    res.redirect('/login');
  }
});

module.exports = router;
