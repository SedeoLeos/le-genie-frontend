import { Env } from '@/libs/Env'
import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  // Récupère le formData de la requête entrante
  const contentType = req.headers.get('content-type') || ''
  if (!contentType.includes('multipart/form-data')) {
    return NextResponse.json({ error: 'Type de contenu invalide' }, { status: 400 })
  }
  const cookieStore = await  cookies()
  const accessToken = cookieStore.get('access_token')?.value
  
  const formData = await req.formData()

  const forwardData = new FormData()
  
  const image = formData.get("image")
  if (image instanceof File) {
    forwardData.append("imageFile", image)
  }
  console.log(" ----",accessToken)
  const res = await fetch(`${Env.BOG_API_BASE_URL}posts/${id}/images`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`, // Forward du token
    },
    body: forwardData,
  })

  const json = await res.json()
  return NextResponse.json(json, { status: res.status })
}
