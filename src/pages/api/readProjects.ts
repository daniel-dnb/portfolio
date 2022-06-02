import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const projects = await prisma.projects.findMany()

      res.status(200).json(projects)
    } catch {
      res.status(404).json({ error: 'Something is wrong' })
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' })
  }
}
