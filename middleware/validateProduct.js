module.exports = (req, res, next) => {
  const { name, category, price } = req.body;
  if (!name || !category || typeof price !== 'number') {
    return res.status(400).json({ error: 'Invalid product data' });
  }
  next();
};
