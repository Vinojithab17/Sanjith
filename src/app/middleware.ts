import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Protect all admin routes
  if (path.startsWith('/admin')) {
    const token = req.cookies.get('token')?.value;

    // No token → unauthorized
    if (!token) {
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }

    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const decoded: any = verifyToken(token);

      // Not admin → unauthorized
      if (decoded.role !== 'admin') {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
    } catch (err) {
      console.error('JWT verification error:', err);
      // Invalid or expired token
      return NextResponse.redirect(new URL('/unauthorized', req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
