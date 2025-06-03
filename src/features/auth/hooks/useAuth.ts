import { useState, useEffect } from 'react';

export interface User {
  sub: string;
  email?: string;
  name?: string;
  picture?: string;
}

/**
 * Hook React pour récupérer l'utilisateur connecté.
 * Il fait un GET sur `/api/auth/me` et met à jour l'état `user`.
 */
export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('/api/auth/me');
        if (!res.ok) {
          setUser(null);
        } else {
          const data = await res.json();
          setUser(data.user);
        }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (_error) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  return { user, loading };
}
