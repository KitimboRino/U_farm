const express = require('express');
const router = express.Router();
const uProduce = require('../models/produceUploadReg');
const multer = require('multer');
const path = require('path');




// settings
//Setting image upload storage engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    );
  },
});

//Image upload
const upload = multer({
  storage: storage,
}).single('image');


// Get Method
router.get('/uProdUpload', (req, res) => {
  res.render('uProduceUpload', { title: 'Produce upload' });
  console.log(req.body);
});

// save data to the database
router.post('/uProdUpload', upload, async (req, res) => {
  try {
    const produce = new uProduce(req.body);
    produce.image = req.file.filename;
    await produce.save();
    res.redirect('/pUploadList');
    console.log('save success');

  } 
  catch (err) {
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});


router.get('/pUploadList', async (req, res) => {
  // Added a check
  // if (req.session.user) {
    try {
      let item = await uProduce.find();
      if (req.query.ward) {
        item = await uProduce.find({ ward: req.query.ward });
      }
      res.render('prodUploadList', {
        title: 'Urban Farmer List',
        items: item,
        // currentUser: req.session.user,
      });
    } catch (err) {
      res.status(400).send('Unable to find items in the database');
  }
});

// router.post('/delete', async (req, res) => {
//   if (req.session.user) {
//     try {
//       await uProduce.deleteOne({ _id: req.body.id });
//       res.redirect('back');
//     } catch (err) {
//       res.status(400).send('Unable to delete item in the database');
//     }
//   } else {
//     console.log('cant find session');
//     res.redirect('/login');
//   }
// });

// // find the details of the user using the id that has benn passed through the parama
// router.get('/update/:id', async (req, res) => {
//   if (req.session.user) {
//     try {
//       const update = await Registration.findOne({ _id: req.params.id });
//       res.render('uPListUpdate', { user: updateUser });
//     } catch (err) {
//       res.status(400).send('Unable to find item in the database');
//     }
//   } else {
//     console.log("Can't find session");
//     res.redirect('/login');
//   }
// });

// router.post('/update', async (req, res) => {
//   if (req.session.user) {
//     try {
//       await uProduce.findOneAndUpdate({ _id: req.query.id }, req.body);
//       res.redirect('urbanFarmerList');
//     } catch (err) {
//       res.status(404).send('Unable to update item in the database');
//     }
//   } else {
//     console.log("can't find session");
//     res.redirect('/login');
//   }
// });

module.exports = router;


