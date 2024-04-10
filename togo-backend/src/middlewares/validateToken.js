import Jwt  from "jsonwebtoken"
import dotenv from "dotenv"

export const authRequired = (req, res, next) => {
    const {token} = req.cookies
    if (!token) return res.status(401).json({message: "Unauthorized"})
     dotenv.config()
    Jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(401).json({message: "invalid token"})

        req.user = user
    })
    next()
}