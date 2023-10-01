import { sessionStatus } from '@/utils/session';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ["/middlewareside"];

export default function middleware(req: any) {
  // if session status is false and the route is in the protectedRoutes array
  if (!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteUrl = new URL("/", req.nextUrl.origin); // get the origin of the request
    return NextResponse.redirect(absoluteUrl.toString()); // redirect to the origin
  }
}