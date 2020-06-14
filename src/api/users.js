import fetch from "../utils/fetch.js";

export const login = loginForm => fetch.post('users/auth/login', loginForm)

export const getLoginState = () => fetch.get('users/auth/state')

export const logout = () => fetch.get('users/auth/logout')

export const register = registerForm => fetch.post('users', registerForm)

export const isUserNameExisted = name => fetch.get(`users/valid/existedusername/${name}`)

export const resetPassword = resetPasswordForm => fetch.put('users', resetPasswordForm)