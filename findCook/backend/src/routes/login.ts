import { Router } from "express";
import { UserModel } from "../models/UserModel";
const router = Router();

// router.get('/', (req, res) => {
//     res.send('Hello login');
// });

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
})

router.post('/register', async (req, res) => {
    const { email, password, name } = req.body;
    console.log(email, password, name);
})

export default router;