


export function resCookie(res, data) {

  return res.cookie('refreshToken', data, 
    {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 604800000
    }
  )

}