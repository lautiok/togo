import {Router} from "express";
import {login, register, logout, profile, verifyToken} from "../controller/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js";


const router = Router();

router.post('/login', login )
router.post('/register', register )
router.post('/logout', logout )
router.get('/profile', authRequired, profile )
router.get("/verify", verifyToken);

export default router