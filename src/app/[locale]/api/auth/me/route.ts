// app/api/auth/me/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken, JwtPayload } from '@/libs/auth/jwt';

export async function GET(req: NextRequest) {
    const accessToken = req.cookies.get('access_token')?.value;
    console.log("accessToken",accessToken);
    if (!accessToken) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    let payload: JwtPayload;
    try {
        payload = verifyAccessToken(accessToken);
    } catch {
        return NextResponse.json({ user: null }, { status: 401 });
    }
    console.log(payload);

    // On renvoie uniquement les champs utiles au client
    const user = {
        sub: payload.sub,
        email: payload.email,
        name: payload.name,
        picture: payload.picture,
    };

    return NextResponse.json({ user });
}
