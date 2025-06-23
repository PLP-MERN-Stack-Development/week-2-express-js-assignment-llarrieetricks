module.exports = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token || token !== 'Bearer mysecrettoken') {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  next();
};

