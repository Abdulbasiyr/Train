
import { verifyAuthUser } from "../api/authApi"

document.addEventListener('DOMContentLoaded', async (e) => {
  

  try {
    let verifyUser = await verifyAuthUser()
  } catch(err) {
    console.log('server error')
  }
  




} )