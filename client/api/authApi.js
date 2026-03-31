import { baseRequest } from "/api/requestApi.js";

export function loginApi(payload) {
  return baseRequest('/auth/login', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}

export function signUpApi(payload) {
  return baseRequest('/auth/signUp', {
    method: 'POST',
    body: JSON.stringify(payload)
  })
}


// verify user
export function verifyAuth() {
  return baseRequest('/auth/verify', {
    method: 'GET',
    credentials: 'include'
  })
}