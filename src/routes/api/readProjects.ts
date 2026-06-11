import { createFileRoute } from '@tanstack/react-router'
import prisma from '../../lib/prisma'

export const Route = createFileRoute('/api/readProjects')({
  server: {
    handlers: {
      GET: async () => {
        try {
          const projects = await prisma.projects.findMany()

          return Response.json(projects)
        } catch {
          return Response.json({ error: 'Something is wrong' }, { status: 404 })
        }
      }
    }
  }
})
