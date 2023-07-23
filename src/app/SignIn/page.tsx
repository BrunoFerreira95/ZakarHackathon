'use client'

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'
import User from '../User/page'

const SignIn = () => {

  const router = useRouter()

  const {
    register,
    handleSubmit,
  } = useForm()

  const handleSignIn = async (data) => {
    const {email, password} = data
    const {data: login, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    router.push('./User')
  }
  
  return (
    <>
    <div className='flex justify-center items-center min-h-screen max-h-fit'>
      <form onSubmit={handleSubmit(handleSignIn)} className='flex flex-col border-2 border-black p-5 rounded-lg shadow-lg'>
        <label htmlFor="email">Email:</label>
        <input  className='border-2 border-black rounded-lg'  type="email" {...register("email")}/>
        <label htmlFor="password">Password:</label>
        <input className='border-2 border-black rounded-lg'  type="password" {...register("password")}/>

        <div className='flex justify-center'>
        <button className='mt-2 bg-slate-800 text-white rounded-lg w-1/2' type='submit'>
          Enter
        </button>
        </div>
        <div className='flex justify-end mt-5'  >
          <Link className='text-blue-700 font-bold ' href={'./SignUp'}>
          SignUp
          </Link>
        </div>
          <Link href={'./resetpassword'}>
            Forget my password
          </Link>
      </form>
    </div>
  </>
  )
}

export default SignIn