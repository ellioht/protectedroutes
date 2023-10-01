import React from 'react'
import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';

const ServerSide = () => {
  const session = sessionStatus;
  // This is a server side component,
  // meaning it will be execute all the code on the server side
  // before it is sent to the client
  // so we don't need to use useEffect or useLayoutEffect
  if(!session) {
    redirect('/')
  }
  return (
    <div>This is a protected server component</div>
  )
}

export default ServerSide
