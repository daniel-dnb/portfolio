import { createFileRoute } from '@tanstack/react-router'
import crypto from 'node:crypto'
import { auth } from '../../../lib/auth'
import prisma from '../../../lib/prisma'

type CreateProjectBody = {
  title: string
  description: string
  github?: string
  site: string
  imgs: string[]
  technologies: Array<{
    alt: string
    name: string
    url: string
  }>
}

export const Route = createFileRoute('/api/admin/createProject')({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const session = await auth.api.getSession({
          headers: request.headers
        })

        if (!session?.user || session.user.role !== 'ADMIN') {
          return new Response(null, { status: 401 })
        }

        try {
          const body = (await request.json()) as CreateProjectBody
          const project = await prisma.projects.create({
            data: {
              key: crypto.randomUUID(),
              title: body.title,
              description: body.description,
              github: body.github,
              site: body.site,
              imgs: body.imgs,
              technologies: body.technologies
            }
          })

          return Response.json({ data: project })
        } catch {
          return Response.json({ error: 'Something is wrong' }, { status: 404 })
        }
      }
    }
  }
})
