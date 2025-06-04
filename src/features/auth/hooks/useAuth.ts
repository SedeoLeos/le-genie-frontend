import { useState, useEffect } from 'react';
import { getUser } from '../actions/get-user.action';

type User = Awaited<ReturnType<typeof getUser>>;

/**
 * Hook React pour récupérer l'utilisateur connecté.
 * Il fait un GET sur `/api/auth/me` et met à jour l'état `user`.
 */
export function useUser() {
  const [user, setUser] = useState<User>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const user = await getUser();
        if (!user) {
          setUser(null);
        } else {
          setUser(user);
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
