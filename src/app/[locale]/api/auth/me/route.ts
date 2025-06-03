import { NextRequest, NextResponse } from 'next/server';
import { verifyAccessToken, JwtPayload } from '@/libs/auth/jwt'; 
import { getUserById } from '@/features/auth/actions/get-user.action';

export async function GET(req: NextRequest) {
    const accessToken = req.cookies.get('access_token')?.value;

    if (!accessToken) {
        return NextResponse.json({ user: null }, { status: 401 });
    }

    let payload: JwtPayload;
    try {
        payload = verifyAccessToken(accessToken);

        if (!payload.sub || !payload.email) {
            throw new Error('Invalid token payload');
        }
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return NextResponse.json({ user: null }, { status: 401 });
    }

    const user = await getUserById();

    if (!user) {
        return NextResponse.json({ user: null }, { status: 404 });
    }

    return NextResponse.json({
        user: {
            id: user.id,
            email: user.email,
            name: user.name,
            picture: user.picture,
        },
    });
}
