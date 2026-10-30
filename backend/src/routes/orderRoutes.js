const express = require('express');
const router = express.Router();

// GET /api/orders
router.get('/', (req, res) => {
    res.json({ message: 'Get all orders' });
});

// POST /api/orders
router.post('/', (req, res) => {
    res.status(201).json({ message: 'Create order' });
});

module.exports = router;

