const express = require('express');
const router = express.Router();

// GET /api/products
router.get('/', (req, res) => {
    res.json({ message: 'Get all products' });
});

// GET /api/products/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Get product ${req.params.id}` });
});

module.exports = router;

