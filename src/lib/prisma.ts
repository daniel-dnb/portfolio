import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL
})

const globalForPrisma = globalThis as unknown as {
  prisma?: PrismaClient
}

if (process.env.NODE_ENV === 'production') {
  globalForPrisma.prisma = new PrismaClient({ adapter })
} else {
  if (!globalForPrisma.prisma) {
    globalForPrisma.prisma = new PrismaClient({ adapter })
  }
}

const prisma = globalForPrisma.prisma

export default prisma
