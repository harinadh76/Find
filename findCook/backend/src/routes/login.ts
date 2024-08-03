import { Request, Router } from "express";
import { UserModel } from "../models/UserModel";
import jwt from 'jsonwebtoken';
import { authMiddleware } from "../middleware";
const router = Router();


router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
        if (user.password == password) {
            let payload = {
                userId: user._id.toString(),
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
            return res.status(200).json({ token, message: "Login SuccessFul" })
        } else {
            return res.status(200).json({ message: 'Wrong Password' })
        }
    }
})

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    const exists = await UserModel.find({ email });
    if (exists.length > 0) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }
    const user = await UserModel.create({ email, password, name });
    return res.status(200).json({ message: 'User created successfully' });
})

router.get('/profile', authMiddleware, async (req: any, res) => {
    const userId = req.user.userId;
    const user = await UserModel.findById({ _id: userId });
    console.log(user);
    return res.json({ user, message: 'Successfully fetched User' });
})

export default router;