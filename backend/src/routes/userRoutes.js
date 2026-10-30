const express = require('express');
const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
    res.json({ message: 'Get all users' });
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
    res.json({ message: `Get user ${req.params.id}` });
});

module.exports = router;

