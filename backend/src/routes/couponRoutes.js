const express = require('express');
const router = express.Router();

// GET /api/coupons
router.get('/', (req, res) => {
    res.json({ message: 'Get all coupons' });
});

module.exports = router;

