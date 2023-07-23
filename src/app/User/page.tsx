'use client'
import { supabase } from '@/lib/supabase'
import React from 'react'

const User = async () => {


  function sendAlertOfFire() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        console.log(latitude, longitude)
      })
    }
  }
  return (
    <>
      <div className='flex justify-center items-center min-h-screen max-h-fit'>
        <button onClick={sendAlertOfFire} className='bg-red-600 h-20 px-5 rounded-lg'>Send Alert of Fire</button>
      </div>
    </>

  )
}

export default User