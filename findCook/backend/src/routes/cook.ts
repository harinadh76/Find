import { Request, Router } from "express";
import { UserModel } from "../models/UserModel";
import { authMiddleware } from "../middleware";
import { Types } from "mongoose";

const router = Router();

router.get('/', (req, res) => {
    res.send('Cooking');
})

router.post('/', async (req, res) => {

})

export default router;