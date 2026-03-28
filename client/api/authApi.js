import { baseRequest } from "./requestApi";

export function loginApi(payload) {
  return baseRequest('/auth/signin', {
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