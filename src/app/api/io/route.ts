'use server'

import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

export const GET = async () => {
  const cookieStore = await cookies()
  const sessionToken = cookieStore.get('next-auth.session')?.value
  const ioUri = process.env.IO_SERVER
  return NextResponse.json(
    {
      sessionToken,
      ioUri,
    },
    { status: 200 }
  )
}
