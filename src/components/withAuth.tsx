'use client'

import { sessionStatus } from '@/utils/session';
import { redirect } from 'next/navigation';
import { useEffect } from 'react';

// High Order Component (HOC)
export default function withAuth(Component: any) {
  return (
    function WithAuth(props: any) {
      const session = sessionStatus;

      useEffect(() => {
        if (!session) {
          return redirect('/')
        }
      }, [])

      if (!session) {
        return null;
      }

      return <Component {...props} />
    }
  )
}