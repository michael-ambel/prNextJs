"use client"

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { useRouter } from "next/navigation"
import { useState } from "react"

// components
import AuthForm from "../AuthForm"


export default function Login() {

  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e, email, password) => {
    e.preventDefault()
    setError('')
    
    const supabase = createClientComponentClient()
    const {error} = await supabase.auth.signInWithPassword(
      {email, password}
    )

    if(!error){
      router.push('/')
    }

    if(error){
      console.log(error);
      setError(error.message)
    }
  }
[]
  return (
    <main>
      <h2 className="text-center">Login</h2>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <div  className="error">{error}</div>}
    </main>
  )
}