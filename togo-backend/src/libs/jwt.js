import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const SECRET = process.env.JWT_SECRET;
export async function createAccessToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
}