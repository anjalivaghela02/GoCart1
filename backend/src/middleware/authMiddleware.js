// Authentication Middleware
const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized - No token provided' });
    }
    // Token verification logic goes here
    next();
};

module.exports = authMiddleware;

