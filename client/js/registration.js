
import { z } from 'https://cdn.jsdelivr.net/npm/zod@3.23.8/+esm'
import { loginApi, signUpApi } from '/api/authApi.js';

const errMessage = document.querySelector('.message')
const signInForm = document.getElementById('signInForm');
const signUpForm = document.getElementById('signUpForm');

const params = new URLSearchParams(window.location.search)
const mode   = params.get('mode')

if(mode === 'signin') {
  signInForm.classList.add('active')
} else {
  signUpForm.classList.add('active')
}

// zod shema
const authBase = {
  email: z.string().email('Invalid Email'),
  password: z.string().min(6, 'Password should have minimum 6 symbol')
}

const signInObj = z.object(authBase)
const signUpObj = z.object(authBase).extend({ name: z.string().min(2) })

// Sign In форма

signInForm.addEventListener('submit', (e) => {
  e.preventDefault();
  errMessage.textContent = ''

  const email    = document.getElementById('signInEmail').value;
  const password = document.getElementById('signInPassword').value;
  
  const parsed = signInObj.safeParse({email, password})
  if(!parsed.success) return errMessage.textContent = parsed.error.issues[0].message  

  loginApi(parsed.data)

});


// Sign Up форма

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  errMessage.textContent = ''

  const name     = document.getElementById('signUpName').value;
  const email    = document.getElementById('signUpEmail').value;
  const password = document.getElementById('signUpPassword').value;

  const parsed = signUpObj.safeParse({name, email, password})
  if(!parsed.success) return errMessage.textContent = parsed.error.issues[0].message

  signUpApi(parsed.data)

});