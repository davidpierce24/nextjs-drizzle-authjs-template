import React from 'react'
import { signOut } from "@/server/auth/auth"

function SignOut() {
  return (
    <form
    action={async () => {
      "use server"
      await signOut()
    }}
  >
    <button type='submit'>Sign Out</button>
  </form>
  )
}

export default SignOut