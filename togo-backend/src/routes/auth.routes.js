import {Router} from "express";
import {login, register, logout, profile, verifyToken} from "../controller/auth.controller.js";
import {authRequired} from "../middlewares/validateToken.js";
import { validatorSchema } from "../middlewares/validator.middleware.js";
import { registerSchema, loginSchema } from "../schemas/auth.schemas.js";

const router = Router();

router.post('/login', validatorSchema(loginSchema), login )
router.post('/register', validatorSchema(registerSchema), register )
router.post('/logout', logout )
router.get('/profile', authRequired, profile )
router.get("/verify", verifyToken);

export default router