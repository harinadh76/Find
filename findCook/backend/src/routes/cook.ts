import { Request, Router } from "express";
import { UserModel } from "../models/UserModel";
import { authMiddleware } from "../middleware";
import { Types } from "mongoose";
import { CookModel } from "../models/CookModel";

const router = Router();

router.get('/', authMiddleware, async (req: any, res) => {
    const id = req.user.userId;
    const email = req.query.email;
    const cookDetails = await CookModel.findOne({ email })
    if (cookDetails) {
        return res.status(200).json({ cookDetails })
    }
    return res.status(200).json({ message: 'Cook Not Found' })
})

router.get('/profile', authMiddleware, async (req: any, res) => {
    const id = req.user.userId;
    // const email = req.query.email;
    const cookDetails = await CookModel.findOne({ _id: id })
    if (cookDetails) {
        return res.status(200).json(cookDetails)
    }
    return res.status(200).json({ message: 'Cook Not Found' })
})

router.post('/', async (req, res) => {

})

// TODO: Write call to get all Cook Details ( for cards page in user)
router.get('/all', async (req, res) => {
    const cooks = await CookModel.find();
    return res.status(200).json({ message: 'All Cooks', cooks })
})

export default router;