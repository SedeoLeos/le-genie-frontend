import { Button } from '@/components/ui/button'
import Logo from '@/components/ui/logo'
import { GithubIcon, GlobeIcon } from 'lucide-react'
import React from 'react'

function Login() {
    return (
        <div className='flex dark:bg-gray-100 bg-gray-900 h-screen'>
            <div className="flex flex-col justify-center w-1/3 dark:bg-gray-900 bg-gray-100 p-10">
                <Logo />

                <div className='flex flex-1 items-center justify-center  w-full'>
                    <div className='flex flex-col gap-10 p-10 w-full'>
                        <Button className='dark:bg-white dark:text-gray-900 bg-gray-900 text-white w-full py-8 text-lg font-bold cursor-pointer'>
                            <GlobeIcon className='w-8 h-8' />
                            Login with Google</Button>
                        <Button className='dark:bg-white dark:text-gray-900 bg-gray-900 text-white  w-full py-8 text-lg font-bold cursor-pointer'>
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