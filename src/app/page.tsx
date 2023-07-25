'use client'

import { supabase } from '@/lib/supabase';
import SignIn from './SignIn/page';
import User from './User/page';
import { useEffect } from 'react';

export default function Home() {
  let session


  
  useEffect(() => {
    const initSession = async () => {
      const { data, error } = await supabase.auth.getSession()
      session = data
    }    
    initSession()
  })
 
  
  return (
    <>
      {session ? checkUserSession(session) : <SignIn/> }
    </>
  )
}
async function checkUserSession(session) {
  console.log(session)
  let teste = 'people'
  switch (teste) {
    case 'admin':
      break;
    case 'people':
      return <User/>

      break;    
    default:
      return <User/>
      break;
  }
}