
import jwt from 'jsonwebtoken'
import 'dotenv/config'


export function generateRefreshToken(data) {
  return jwt.sign(
    {id: data.id, email: data.email},
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' } )
}


export function generateAccessToken(data) {
  return jwt.sign(
    {id: data.id, email: data.email},
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: '30m' } )
}


export function verifyRefreshToken(token) {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}

export function verifyAccessToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}