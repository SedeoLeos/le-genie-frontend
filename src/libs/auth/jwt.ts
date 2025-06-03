// /libs/auth/jwt.ts
import jwt from 'jsonwebtoken';

export interface JwtPayload {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
  iat: number;
  exp: number;
}

/**
 * Vérifie la validité d'un access token (JWT).
 * Si le token n'est pas valide ou expiré, on throw une erreur.
 */
export function verifyAccessToken(token: string): JwtPayload {
  // Remplace par ta clé secrète ou ta clé publique si RS256
  const secret = process.env.JWT_SECRET!;
  const payload = jwt.verify(token, secret) as JwtPayload;
  return payload;
}

/**
 * Génère un JWT access token à partir d'un payload.
 */
export function signAccessToken(payload: Omit<JwtPayload, 'iat' | 'exp'>): string {
  const secret = process.env.JWT_SECRET!;
  // On signe pour 15 minutes, par exemple
  return jwt.sign(payload, secret, { expiresIn: '15m' });
}
