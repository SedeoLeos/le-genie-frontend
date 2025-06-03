'use client'
import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import { Env } from '@/libs/Env'
import { GithubIcon, GlobeIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { callbackAction } from './actions/callback.action'
let oauthWindow: Window | null = null;
function Login() {
    const router = useRouter();
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [message, setMessage] = useState('');
  
    useEffect(() => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      const state = urlParams.get('state'); // provider ici : "google" ou "github"
  
      if (code && state) {
        // On a le code et le provider, on appelle le backend pour échanger le code contre un JWT
        callbackAction({ code, provider: state as "GOOGLE" | "GITHUB" })
          .then((res) => {
            if (res.error) {
              setMessage(res.error.join(', '));
            } else {
              setMessage('Connexion réussie !');
              router.push('/');
            }
          })
          .catch((err) => setMessage('Erreur : ' + err.message));
      }
    }, [router]);
  
    // Fonction pour démarrer le flow OAuth (redirige vers Google ou GitHub)
    function startOAuth(provider: 'GOOGLE' | 'GITHUB') {
        let oauthUrl = '';
        const state = provider; // à générer dynamiquement
      
        if (provider === 'GOOGLE') {
          const scope = encodeURIComponent('openid email profile');
          oauthUrl = 
            `https://accounts.google.com/o/oauth2/v2/auth` +
            `?client_id=${Env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}` +
            `&redirect_uri=${encodeURIComponent(Env.NEXT_PUBLIC_REDIRECT_URI)}` +
            `&response_type=code` +
            `&scope=${scope}` +
            `&state=${state}`;
        } else if (provider === 'GITHUB') {
          const scope = encodeURIComponent('user:email');
          oauthUrl =
            `https://github.com/login/oauth/authorize` +
            `?client_id=${Env.NEXT_PUBLIC_GITHUB_CLIENT_ID}` +
            `&redirect_uri=${encodeURIComponent(Env.NEXT_PUBLIC_REDIRECT_URI)}` +
            `&scope=${scope}` +
            `&state=${state}`;
        }
      
        const width = 600;
        const height = 600;
        const left = window.screenX + (window.outerWidth - width) / 2;
        const top = window.screenY + (window.outerHeight - height) / 2;
        const options = `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=yes,status=1`;
      
        if (oauthWindow && !oauthWindow.closed) {
          oauthWindow.focus();
          oauthWindow.location.href = oauthUrl; // force reload
        } else {
          oauthWindow = window.open(oauthUrl, 'OAuthLogin', options);
        }
    }
  
    return (
        <div className='flex dark:bg-gray-100 bg-gray-900 h-screen'>
            <div className="flex flex-col justify-center w-1/3 dark:bg-gray-900 bg-gray-100 p-10">
                <Logo />

                <div className='flex flex-1 items-center justify-center  w-full'>
                    <div className='flex flex-col gap-10 p-10 w-full'>
                        <Button 
                        onClick={() => startOAuth('GOOGLE')}
                        className='dark:bg-white dark:text-gray-900 bg-gray-900 text-white w-full py-8 text-lg font-bold cursor-pointer'>
                            <GlobeIcon className='w-8 h-8' />
                            Login with Google</Button>
                        <Button 
                        onClick={() => startOAuth('GITHUB')}
                        className='dark:bg-white dark:text-gray-900 bg-gray-900 text-white  w-full py-8 text-lg font-bold cursor-pointer'>
                            <GithubIcon className='w-8 h-8' />
                            Login with GitHub</Button>
                    </div>
                </div>

            </div>
            <div className="flex-1 flex  justify-center items-center p-10 ">
                <div className=' flex flex-col  justify-center items-center gap-5'>
                    <p className='text-white dark:text-gray-900 text-3xl font-bold text-center'>
                        Fais moi confiance je n'ai <br/> pas besoin de ton mots de passe
                    </p>
                    <div className='flex items-center gap-2'>
                        <div className='min-w-10 min-h-10 dark:bg-gray-900 bg-white rounded-full'></div>
                        <div className='flex flex-col text-sm'>
                            <span className='text-white dark:text-gray-900  '>
                                SLaega (Sedeo Leos)
                            </span>
                            <span className='text-white dark:text-gray-900  '>
                                founder of @slaega/validation & openfgaPlayground
                            </span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Login