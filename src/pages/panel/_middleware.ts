import { getToken } from 'next-auth/jwt'
import { NextRequest, NextResponse } from 'next/server'

const URL = process.env.NEXTAUTH_URL

export async function middleware(req: NextRequest) {
  const session = await getToken({
    req,
    secret: process.env.JWT_SECRET
  })

  if (!session || session?.role !== 'ADMIN') {
    return NextResponse.redirect(URL)
  }

  return NextResponse.next()
}
