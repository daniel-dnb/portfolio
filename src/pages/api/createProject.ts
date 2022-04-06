import { NextApiRequest, NextApiResponse } from 'next'
//import crypto from 'crypto'
//import { connectToDatabase } from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  /* if (req.method === 'POST') {
    try {
      const { title, description, github, site, imgs, technologies } = req.body
      const key = crypto.randomUUID()
      const { db } = await connectToDatabase()

      // const projects = await db.collection('projects').find().toArray()
      const projects = await db.collection('projects').insertOne({
        key,
        title,
        description,
        github,
        site,
        imgs,
        technologies
      })

      res.status(200).json({ message: 'Success' })
    } catch {
      res.status(404).json({ error: 'Something is wrong' })
    }
  } else {
    res.status(400).json({ error: 'Invalid request method' })
  } */
}
