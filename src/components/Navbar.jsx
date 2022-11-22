import React from 'react'
import Signin from './Signin'
import LogOut from './LogOut'
import { auth } from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { FaCommentDots } from "react-icons/fa";



const style ={
 nav: 'bg-blue-300 h-20 flex justify-between items-center p-4',
 heading: 'flex p-1 text-white text-3xl'

}

const Navbar= () => {
    const [user]  = useAuthState(auth)
    console.log(user)

  return (
    <div className={style.nav}>
        <h1 className={style.heading}><FaCommentDots/>Chat APP</h1>
        {user ?   <LogOut /> : <Signin />}
    </div>
  )
}

export default Navbar