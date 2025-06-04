import Layout from '@/components/Layout/Layout'
import Profile from '@/features/auth/Profile'
import React from 'react'

function MePage() {
  return (
    <Layout sidebar>
        <Profile />
    </Layout>
  )
}

export default MePage