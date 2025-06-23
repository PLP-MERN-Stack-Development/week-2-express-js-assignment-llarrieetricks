const express = require('express');
const router = express.Router();
const products = require('../data/products.json');
const validateProduct = require('../middleware/validateProduct');

router.get('/', (req, res) => {
  let results = [...products];
  const { name, category, page = 1, limit = 5 } = req.query;

  if (name) {
    results = results.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  }
  if (category) {
    results = results.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);
  const paginated = results.slice(start, end);

  res.json({
    total: results.length,
    page: parseInt(page),
    limit: parseInt(limit),
    data: paginated
  });
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });
  res.json(product);
});

router.post('/', validateProduct, (req, res) => {
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

router.put('/:id', validateProduct, (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ error: 'Product not found' });

  product.name = req.body.name;
  product.category = req.body.category;
  product.price = req.body.price;
  res.json(product);
});

router.delete('/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
});

module.exports = router;
