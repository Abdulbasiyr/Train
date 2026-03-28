
import dotenv from 'dotenv'
dotenv.config()

export async function baseRequest(path, options = {} ) {
  
  const res = await fetch(`${process.env.BASE_URL}${path}`, {
    ...options,
    header: {
      'Content-Type': 'application/json',
      ...options.header
    }
  })

  const data = await res.json().catch(() => null)

  return data

}
