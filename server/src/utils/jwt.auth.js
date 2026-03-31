
import jwt from 'jsonwebtoken'
import 'dotenv/config' 


export function jwtAuth(data) {

  const token = jwt.sign( 
    { id: data.id, email: data.email },
    process.env.SECRET_KEY,
    { expiresIn: '7d' }
  )

  return token

}