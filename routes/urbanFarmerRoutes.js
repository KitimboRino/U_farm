const express = require('express');
const router = express.Router();

// Get Method
router.get('/produce_upload', (req, res) => {
  res.render('uProdUpload');
});

// POST Method
router.post('/uProdUpload', (req, res) => {
  console.log(req.body);
  // res.render('adminPanel');
});

module.exports = router;

// Produce Upload form route.
// app.post('/uProdUpload', (req, res) => {
//   res.render('req.body');
// });
// app.get('/uProdUpload', (req, res) => {
//   res.render('uProdUpload');
// });

