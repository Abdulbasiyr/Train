


export function resCookie(res, token) {

  res.clearCookie('token')

  return res.cookie('token', token, 
    {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: 604800000
    }
  )

}