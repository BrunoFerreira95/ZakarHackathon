"use client"

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'




const SignUp = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
  } = useForm()

  const handleSignUp = async (data) => {
    const { CheckPassword, email, name, password, tel } = data

    if (password !== CheckPassword) {
      return
    }

    const { data: login, error} = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          tel,
          name
        },
        emailRedirectTo: `${location.origin}/auth/callback`,

      },
    })
    router.refresh()

    console.log('login', login)
    console.log('error', error)

  }
  return (
    <>
      <div className='flex justify-center items-center min-h-screen max-h-fit'>
        <form onSubmit={handleSubmit(handleSignUp)} className='flex flex-col border-2 border-black p-5 rounded-lg shadow-lg'>
          <label htmlFor="name">Name:</label>
          <input className='border-2 border-black rounded-lg' type="text" {...register("name")} />
          <label htmlFor="tel">tel:</label>
          <input className='border-2 border-black rounded-lg' type="tel" {...register("tel")} />
          <label htmlFor="email">Email:</label>
          <input className='border-2 border-black rounded-lg' type="email" {...register("email")} />
          <label htmlFor="password">Password:</label>
          <input className='border-2 border-black rounded-lg' type="password" {...register("password")} />
          <label htmlFor="password">Check our Password:</label>
          <input className='border-2 border-black rounded-lg' type="password" {...register("CheckPassword")} />

          <div className='flex justify-center'>
            <button className='mt-2 bg-slate-800 text-white rounded-lg w-1/2' type='submit'>
              Enter
            </button>
          </div>
          <div className='flex justify-end mt-5'  >
            <Link className='text-blue-700 font-bold ' href={'./SignIn'}>
              SignIn
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default SignUp