import { Request, Router } from "express";
import { UserModel } from "../models/UserModel";
import jwt from 'jsonwebtoken';
import { authMiddleware } from "../middleware";
import { Types } from "mongoose";
import { CookModel } from "../models/CookModel";
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
    } else {
        return res.status(200).json({ message: 'User not found' })
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

router.post('/cooklogin', async (req, res) => {
    const { email, password } = req.body;
    const user = await CookModel.findOne({ email });
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

router.post('/cookregister', async (req, res) => {
    const { email, password, name } = req.body;
    const exists = await CookModel.find({ email });
    if (exists.length > 0) {
        return res.status(400).json({ message: 'Cook already exists' });
    }
    const userExists = await UserModel.find({ email });
    if (userExists.length > 0) {
        return res.status(400).json({ message: 'An User with this email already exists' });
    }
    const user = await CookModel.create({ email, password, name });
    return res.status(200).json({ message: 'Cook created successfully' });
})

router.get('/profile', authMiddleware, async (req: any, res) => {
    const userId = req.user.userId;
    const user = await UserModel.findById({ _id: userId });
    console.log(user);
    return res.json({ user, message: 'Successfully fetched User' });
})

router.post('/update', authMiddleware, async (req: any, res) => {
    const userId = new Types.ObjectId(req.user.userId);
    const user = await UserModel.findByIdAndUpdate({ _id: userId }, req.body);
    return res.json({ user, message: 'Successfully updated User' });
});

export default router;