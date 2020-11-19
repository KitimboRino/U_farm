const express = require('express');
const router = express.Router();
const farmerOne = require('../models/farmOneReg');
const Users = require('../models/Users');

// Get reads the farmOneReg.pug and displays it on the path
router.get('/farmerOneReg', (req, res) => {
  res.render('farmOneReg', { title: 'Farmer One Registration' });
});

// Route for market
router.get('/market', (req, res) => {
  res.render('market', { title: 'Farmer One Registration' });
});

// Route for cart
router.get('/cart', (req, res) => {
  res.render('cart', { title: 'Farmer One Registration' });
});

// save data to database (Get all route)
// post gets info from form
router.post('/farmerOneReg', async (req, res) => {
  // we put await inside a try to catch the errors
  try {
    //Create an instance of the user model for data entered(req.body==got from the user)
    const user = new Users(req.body);
    const items = new farmerOne(req.body);
    await items.save();
    // Harshing password to be checked by passport
    await Users.register(user, req.body.password, (err) => {
      if (err) {
        // if any error
        throw err;
      }
      // otherwise
      res.redirect('/fOneList');
    });
    // console.log('save success');
    // res.redirect('/fOneList');
  } catch (err) {
    // .catch is a promise and used because nodejs asynchronously awaits
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});

// Retrieve data from the database;
router.get('/fOneList', async (req, res) => {
  // Added a check
  if (req.session.user) {
      // Allows you to define a block of code to be tested for errors while it is being executed
    try {
      let items = await farmerOne.find();
      if (req.query.ward) {
        items = await farmerOne.find({ ward: req.query.ward });
      }
      res.render('farmerOneList', {
        title: 'farmOneList',
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

router.post('/foDelete', async (req, res) => {
  // if user has session recorded
  if (req.session.user) {
    try {
      //Using the "deleteOne" method from the MongoDB library, to delete a document in a mongoDB collection.
      await farmerOne.deleteOne({ _id: req.body.id });
      res.redirect('back');
    } catch (err) {
      res.status(400).send('Unable to delete item in the database');
    }
    // otherwise redirect the user back to login
  } else {
    console.log('cant find session');
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

//
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

// router.get('/farmerdash', async (req, res) => {
//   if (req.session.user) {
//     try {
//       res.render('farmer', {
//         title: 'Farmer form',
//         currentUser: req.session,
//         currentRole: req.session.role,
//       });
//     } catch (err) {}
//   } else {
//     console.log("Can't find session");
//     res.redirect('/login');
//   }
// });

module.exports = router;
