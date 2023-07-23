"use client"

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const UpdatePassword = () => {

  const {
    register,
    handleSubmit,
  } = useForm()

  async function updateUserPassword(data) {
    const { password, CheckPassword } = data

    if(password !== CheckPassword) {
      return
    }

    const {data: update, error} = await supabase.auth.updateUser({ password })

    console.log(update)
    console.log(error)
  }
  return (
    <>
      <div className='flex justify-center items-center min-h-screen max-h-fit'>
        <form onSubmit={handleSubmit(updateUserPassword)} className='flex flex-col border-2 border-black p-5 rounded-lg shadow-lg'>
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

export default UpdatePassword