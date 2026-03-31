
import jwt from 'jsonwebtoken'
import 'dotenv/config' 


export function generateRefreshToken(data) {

  const token = jwt.sign( 
    { id: data.id, email: data.email },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: '7d' }
  )

  return token

}


export function generateAccessToken(data) {

    const token = jwt.sign( 
    { id: data.id, email: data.email },
    process.env.ACCESS_TOKEN_SECRET ,
    { expiresIn: '30m' }
  )

  return token
}


// verify refresh token
export function verifyRefreshToken(token) {
  return jwt.verify(token, process.env.REFRESH_TOKEN_SECRET)
}


// verify access token
export function verifyAccessToken(token) {
  return jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
}