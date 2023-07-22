import { supabase } from '@/lib/supabase';
import SignIn from './SignIn/page';
import User from './User/page';

export default async function Home() {
  const { data, error } = await supabase.auth.getSession()
  const { session } = data
  console.log('session',data)

  function checkUserSession() {
    let teste = 'people'
    switch (teste) {
      case 'admin':
        break;
      case 'people':
        console.log('teste')
        return <User/>

        break;    
      default:
        return <User/>
        break;
    }
  }
  return (
    <>
      {session ? checkUserSession() : <SignIn/> }
    </>
  )
}
