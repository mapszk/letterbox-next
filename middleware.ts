import { NextRequest, NextResponse } from 'next/server'
import { privateRoutes } from './utils/routes'

export const middleware = (request: NextRequest) => {
  const isPrivate = privateRoutes.some(route => request.nextUrl.pathname.startsWith(route))
  const authCookie = request.cookies.get('X-Access-Token')

  if (isPrivate && !authCookie) return NextResponse.redirect(new URL('/', request.url))
  if (!isPrivate && authCookie) return NextResponse.redirect(new URL('/feed', request.url))
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - /public
     */
    '/((?!api|_next/public|_next/static|_next/image|.*\\..*|favicon.ico).*)'
  ]
}
