"use server";

import { cookies } from "next/headers";
import { refreshToken } from "./refresh.action";


export async function fetchWithRetry(url: string, options: RequestInit = {}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("access_token")?.value;

  const headers = {
    ...options.headers,
    Authorization: `Bearer ${accessToken}`, // Inclure le token d'accès
  };

  let response = await fetch(url, { ...options, headers });

  if (response.status === 401) {
    console.warn("Access token expired. Attempting to refresh...");

    // Rafraîchir le token
    await refreshToken();

    // Récupérer le nouveau token
    const newAccessToken = cookieStore.get("access_token")?.value;

    if (!newAccessToken) {
      throw new Error("Failed to refresh token");
    }

    // Réexécuter la requête avec le nouveau token
    response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      },
    });
  }

  return response;
}
