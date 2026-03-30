
const BASE_URL = 'http://localhost:3000'

export async function baseRequest(path, options = {} ) {
  
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
     'Content-Type': 'application/json',
      ...options.header
    }
  })

  const data = await res.json().catch(() => null)
  if(!res.ok) throw new Error(data?.message || 'Request failed')

  return data

}
