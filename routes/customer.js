const express = require('express');
const router = express.Router();

// Get Method
router.get('/market', (req, res) => {
  res.render('market');
});

router.get('/cart', (req, res) => {
  res.render('cart');
});

router.get('/index', (req, res) => {
  res.render('index');
});

// POST Method
router.post('/market', (req, res) => {
  res.render('req.body');
});

router.post('/cart', (req, res) => {
  res.render('cart');
});

module.exports = router;
