'use client'

import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';
import { useLayoutEffect } from 'react';

const ClientSide = () => {
  const session = sessionStatus;

  // useLayoutEffect executes before the return statement
  // useEffect executes after the return statement
  useLayoutEffect(() => {
    if (!session) {
      redirect('/')
    }
  }, [])

  return (
    <div>This page is a protected route on client side</div>
  )
}

export default ClientSide