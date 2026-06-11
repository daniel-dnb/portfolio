import { createFileRoute } from '@tanstack/react-router'
import sendgrid from '@sendgrid/mail'

type SendEmailBody = {
  name: string
  email: string
  subject: string
  message: string
}

export const Route = createFileRoute('/api/sendEmail')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.SENDGRID_API_KEY

        if (!apiKey) {
          return new Response(null, { status: 500 })
        }

        const body = (await request.json()) as SendEmailBody

        try {
          sendgrid.setApiKey(apiKey)
          await sendgrid.send({
            to: 'daniielbnd@gmail.com',
            from: {
              email: 'daniielbnd@gmail.com',
              name: body.name
            },
            replyTo: body.email,
            subject: body.subject,
            html: `
              <p>${body.message}</p>
            `
          })
        } catch {
          return new Response(null, { status: 500 })
        }

        return new Response(null, { status: 200 })
      }
    }
  }
})
