import { NextRequest, NextResponse } from 'next/server';
import { slackService } from '@/app/lib/slack';
import { getUserInfoFromRequest, parseUserAgent } from '@/app/lib/user-info';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { userId, username, email, dataType, dataInfo, additionalData } = body;

    // Validate required fields
    if (!dataType) {
      return NextResponse.json(
        { error: 'dataType is required' },
        { status: 400 }
      );
    }

    // Get user info from request headers
    const userInfo = getUserInfoFromRequest(request, { userId, username, email });
    
    // Parse user agent for additional context
    const userAgentInfo = parseUserAgent(userInfo.userAgent);

    // Send Slack notification
    const success = await slackService.notifyDataUpdate(userInfo, dataType, {
      ...additionalData,
      dataInfo,
      browserInfo: userAgentInfo
    });

    if (success) {
      return NextResponse.json(
        { message: 'Data update notification sent successfully' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Failed to send notification' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error in data update notification:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}