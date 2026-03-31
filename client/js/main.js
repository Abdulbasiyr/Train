
import { verifyAuthUser } from "../api/authApi"

document.addEventListener('DOMContentLoaded', async (e) => {
  
const authContainer = document.querySelector('.authContainer')
let authData;
  
try {
  authData = await verifyAuthUser()
  authContainer.classList.remove('active')
} catch(err) {
  console.log('server error')
}
  




} )