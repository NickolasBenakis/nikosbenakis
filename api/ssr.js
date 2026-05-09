import { createServer } from 'node:http'
import server from '../dist/server/server.js'

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] ?? 'https'
  const host = req.headers['x-forwarded-host'] ?? req.headers.host
  const url = new URL(req.url, `${protocol}://${host}`)

  const headers = new Headers()
  for (const [key, value] of Object.entries(req.headers)) {
    if (value) headers.set(key, Array.isArray(value) ? value.join(', ') : value)
  }

  const init = { method: req.method, headers }
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = req
    init.duplex = 'half'
  }

  const request = new Request(url, init)
  const response = await server.fetch(request)

  res.statusCode = response.status
  for (const [key, value] of response.headers.entries()) {
    res.setHeader(key, value)
  }

  if (response.body) {
    const reader = response.body.getReader()
    while (true) {
      const { done, value } = await reader.read()
      if (done) break
      res.write(value)
    }
  }
  res.end()
}
