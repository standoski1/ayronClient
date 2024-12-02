"use client"
import React, { useEffect } from 'react'
import { redirect } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux';
import { LogoutUser } from '@/redux/userSlice';

export default function withAuth(Component:any) {
    
  return function WithAuth(props:any) {
    const accessToken = useSelector((state: any) => state.user.accessToken);
    const dispatch = useDispatch()
    
    useEffect(() => {
      if (!accessToken) {
        dispatch(LogoutUser())
        redirect("/auth/signin")
      }
    }, [])
    if (!accessToken) {
        return null
    }
    return <Component {...props}/>
  }
}
