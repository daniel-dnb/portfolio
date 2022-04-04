import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const { db } = await connectToDatabase()

      const projects = await db.collection('projects').find({}).toArray()

      res.status(200).json({ projects })
    } catch {
      res.status(404).json({ error: 'Something is wrong' })
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' })
  }
}
