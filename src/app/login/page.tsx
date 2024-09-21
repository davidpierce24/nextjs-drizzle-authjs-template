import SignIn, { Providers } from '@/components/custom/top-nav/sign-in'
import React from 'react'

function Login() {
  return (
    <div className='flex-1 flex justify-center items-center'>
      <SignIn provider={Providers.GITHUB} />
    </div>
  )
}

export default Login