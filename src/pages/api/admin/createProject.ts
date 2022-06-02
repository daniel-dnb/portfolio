import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

const SECRET = process.env.JWTKEY

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const token = req.headers.authorization.replace('Bearer ', '')

    jwt.verify(token, SECRET, async function (err, decoded) {
      if (!err && decoded) {
        const role = decoded['role']

        if (role === 'ADMIN') {
          try {
            const { title, description, github, site, imgs, technologies } =
              req.body
            const key = crypto.randomUUID()

            res.status(200).json({ data: req.body })
          } catch {
            res.status(404).json({ error: 'Something is wrong' })
          }
        }
      }
    })
    res.status(401).end()
  } else {
    res.status(400).json({ error: 'Invalid request method' })
  }
}
