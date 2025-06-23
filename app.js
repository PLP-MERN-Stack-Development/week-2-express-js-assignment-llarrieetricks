
const express = require('express');
const productsRouter = require('./routes/products');
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');

const app = express();

// Middleware
app.use(express.json());
app.use(logger);
app.use(auth);

// Routes
app.use('/api/products', productsRouter);

// Error handling
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message || 'Internal Server Error' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

