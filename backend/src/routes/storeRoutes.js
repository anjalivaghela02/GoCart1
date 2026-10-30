const express = require('express');
const router = express.Router();

// GET /api/stores
router.get('/', (req, res) => {
    res.json({ message: 'Get all stores' });
});

// GET /api/stores/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Get store ${req.params.id}` });
});

module.exports = router;

