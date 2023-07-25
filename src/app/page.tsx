'use client'

import { supabase } from '@/lib/supabase';
import SignIn from './SignIn/page';
import User from './User/page';
import { useEffect } from 'react';

export default function Home() {
  let session
  
  useEffect(() => {
    initSession(session)
  })
   
  return (
    <>
      {session ? checkUserSession(session) : <SignIn/> }
    </>
  )
}
const initSession = async (session) => {
  const { data, error } = await supabase.auth.getSession()
  session = data
}    

function checkUserSession(session) {
  switch (session?.user.app_metadata.userole) {
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