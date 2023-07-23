"use client"

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const ResetPassword = () => {

    const {
        register,
        handleSubmit,
      } = useForm()

    async function sendResetPassword(data) {
        const {email } = data

        const { data: reset, error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: 'http://localhost:3000/update-password',
        })

    }
    return (
        <>
            <div className='flex justify-center items-center min-h-screen max-h-fit'>
                <form onSubmit={handleSubmit(sendResetPassword)} className='flex flex-col border-2 border-black p-5 rounded-lg shadow-lg'>
                    <label htmlFor="email">Email:</label>
                    <input className='border-2 border-black rounded-lg' type="email" {...register("email")} />
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

export default ResetPassword