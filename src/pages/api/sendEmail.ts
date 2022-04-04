import sendgrid from '@sendgrid/mail'
import { NextApiRequest, NextApiResponse } from 'next'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      await sendgrid.send({
        to: 'daniielbnd@gmail.com',
        from: {
          email: 'daniielbnd@gmail.com',
          name: `${req.body.name}`
        },
        replyTo: `${req.body.email}`,
        subject: `${req.body.subject}`,
        html: `
        <p>${req.body.message}</p>
      `
      })
    } catch (error) {
      return res.status(500).end()
    }
    return res.status(200).end()
  }

  return res.status(404).end()
}

export default sendEmail
