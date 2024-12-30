import { NextResponse, NextRequest } from 'next/server'

// GET handler function

export async function GET(request: Request) {
  // JSON response

  const results = {
    message: 'Hello World!',
  }

  // response with the JSON object

  return NextResponse.json(results)
}
