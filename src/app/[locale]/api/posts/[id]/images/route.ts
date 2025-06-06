import { Env } from '@/libs/Env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

// Define a more specific type if known, or use a general one for now
interface BackendApiResponse {
  // Adjust based on actual expected response structure
  success?: boolean;
  message?: string;
  data?: unknown;
  error?: string;
  [key: string]: unknown; // Allows for other properties, use type assertion/checking
}

export async function POST(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id // Changed: Directly access id from params

  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json({ error: 'Type de contenu invalide' }, { status: 400 })
  }
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('access_token')?.value

  const formData = await req.formData()
  const forwardData = new FormData()

  const image = formData.get('image')
  if (image instanceof File) {
    forwardData.append('imageFile', image)
  }

  const res = await fetch(`${Env.BOG_API_BASE_URL}posts/${id}/images`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: forwardData,
  })
  const json: BackendApiResponse = await res.json()
  return NextResponse.json(json, { status: res.status })
}
