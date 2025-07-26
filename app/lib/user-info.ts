import { NextRequest } from 'next/server';

export function getUserInfoFromRequest(
  request: NextRequest,
  additionalUserData?: { userId?: string; username?: string; email?: string }
) {
  // Extract IP address
  const forwarded = request.headers.get('x-forwarded-for');
  const ipAddress = forwarded
    ? forwarded.split(',')[0].trim()
    : request.headers.get('x-real-ip') ||
      request.headers.get('cf-connecting-ip') ||
      '127.0.0.1';

  // Extract User Agent
  const userAgent = request.headers.get('user-agent') || 'Unknown';

  return {
    userId: additionalUserData?.userId,
    username: additionalUserData?.username,
    email: additionalUserData?.email,
    userAgent,
    ipAddress
  };
}

export function parseUserAgent(userAgent: string) {
  const browser = userAgent.includes('Chrome') ? 'Chrome' :
                 userAgent.includes('Firefox') ? 'Firefox' :
                 userAgent.includes('Safari') ? 'Safari' :
                 userAgent.includes('Edge') ? 'Edge' : 'Unknown';
  
  const os = userAgent.includes('Windows') ? 'Windows' :
            userAgent.includes('Mac OS') ? 'macOS' :
            userAgent.includes('Linux') ? 'Linux' :
            userAgent.includes('Android') ? 'Android' :
            userAgent.includes('iOS') ? 'iOS' : 'Unknown';
  
  const device = userAgent.includes('Mobile') ? 'Mobile' :
                userAgent.includes('Tablet') ? 'Tablet' : 'Desktop';
  
  return { browser, os, device };
}