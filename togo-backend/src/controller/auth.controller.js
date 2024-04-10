import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import {createAccessToken} from "../libs/jwt.js"
import  jwt  from "jsonwebtoken";
import dotenv from "dotenv"

export const register = async (req, res) => {
    const {name, email, password} = req.body
    try {

        const userfaund = await User.findOne({email})
        if (userfaund) return res.status(400).json(["user already exists"])
       const hashedPassword =  await bcrypt.hash(password, 10)
        const newUser = new User({
            name,
            email,
            password: hashedPassword
        })
    const userSaved = await newUser.save()

        const token = await createAccessToken({
            id: userSaved._id,
          });
      
          res.cookie("token", token)
          res.json({
            id: userSaved._id,
            name: userSaved.name,
            email: userSaved.email,
          });
        } catch (error) {
          res.status(500).json({ message: error.message });
        }
};

export const login = async (req, res) => {
            const {email, password} = req.body
            try {
                const userfaund = await User.findOne({email})
                if (!userfaund) return res.status(400).json({message: "user not found"})

            const isMatch =  await bcrypt.compare(password, userfaund.password)
            if (!isMatch) return res.status(400).json({message: "invalid credentials"})
        
                const token = await createAccessToken({
                    id: userfaund._id,
                });
            
                res.cookie("token", token)
                res.json({
                    id: userfaund._id,
                    name: userfaund.name,
                    email: userfaund.email,
                });
                } catch (error) {
                res.status(500).json({ message: error.message });
                }
};

export const logout =  (req, res) => {
    res.cookie("token", "", {
        expires: new Date(Date.now(0)),
    })
    return res.sendStatus(200)
}

export const profile =  async (req, res) => {
   const userfaund = await User.findById(req.user.id)

    if (!userfaund) return res.status(400).json({message: "user not found"})
    return res.json({
        id: userfaund._id,
        name: userfaund.name,
        email: userfaund.email,
    })
}

export const verifyToken = async (req, res) => {
    const { token } = req.cookies;
    if (!token) return res.send(false);

    dotenv.config();
    jwt.verify(token, process.env.JWT_SECRET, async (error, user) => {
      if (error) return res.sendStatus(401);
  
      const userFound = await User.findById(user.id);
      if (!userFound) return res.sendStatus(401);
  
      return res.json({
        id: userFound._id,
        name: userFound.name,
        email: userFound.email,
      });
    });
  };