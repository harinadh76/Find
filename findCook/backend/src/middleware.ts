import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ message: 'Invalid Token' })
            }
            req.user = decoded;
            next();
        })
    } else {
        return res.status(401).json({ message: 'You are not authorized to access this route' })
    }
}