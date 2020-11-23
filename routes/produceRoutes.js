const express = require('express');
const router = express.Router();
const uProduce = require('../models/produceUploadReg');
const multer = require('multer');
const path = require('path');

// settings
//Setting the image upload storage engine (mutler)
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
  } catch (err) {
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

// find the details of the user using the id that has benn passed through the parama
router.get('/prodUpdate/:id', async (req, res) => {
  if (req.session.user) {
    try {
      const updateitems = await uProduce.findOne({ _id: req.params.id });
      res.render('puListUpdate', { item: updateitems });
    } catch (err) {
      res.status(400).send('Unable to find item in the database');
    }
  } else {
    console.log("Can't find session");
    res.redirect('/login');
  }
});

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

// Produce update.
router.post('/prodUpdate', upload, async (req, res) => {
  try {
    if (req.file) {
      const img2 = await uProduce.findOneAndUpdate(
        { _id: req.query.id },
        req.body
      );
      img2.image = req.file.filename;
      await img2.save();
    } else {
      await uProduce.findOneAndUpdate({ _id: req.query.id }, req.body);
    }
    res.redirect('/pUploadList');
  } catch (err) {
    res.status(400).send('Sorry! Data posting failed');
  }
});

// Verificaation of Produce
router.get('/verify/:id', async (req, res) => {
  if (req.session.user) {
    try {
      const verifyitems = await uProduce.findOne({ _id: req.params.id });
      res.render('pverify', { item: verifyitems });
    } catch (err) {
      res.status(400).send('Unable to find item in the database');
    }
  } else {
    console.log("Can't find session");
    res.redirect('/login');
  }
});

//Display of apporvde Produce in market
router.get('/shopCart', async (req, res) => {
  try {
    const uproduce = await uProduce.find({ status: 'Approved' });
    res.render('marketShop', { items: uproduce });
  } catch (err) {
    res.status(400).send('Data fetch failed');
  }
});

module.exports = router;
