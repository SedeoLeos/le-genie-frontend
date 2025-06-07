import React, { Suspense } from 'react'
import Login from '@/features/auth/Login'

function AuthPage() {
  return <Suspense><Login /></Suspense>
}

export default AuthPage