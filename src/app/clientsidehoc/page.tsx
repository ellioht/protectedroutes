'use client'

import withAuth from '@/components/withAuth';

const ClientSideHOC = () => {
  return (
    <div>This page is protected route on client side HOC</div>
  )
}

// withAuth is a HOC that wraps ClientSideHOC
export default withAuth(ClientSideHOC);