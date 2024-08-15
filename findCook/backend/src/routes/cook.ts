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
        return res.status(200).json({ message: 'Cook Found', cookDetails })
    }
    return res.status(200).json({ message: 'Cook Not Found' })
})

router.post('/', async (req, res) => {

})

export default router;