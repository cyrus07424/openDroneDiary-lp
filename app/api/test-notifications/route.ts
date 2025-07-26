import { NextRequest, NextResponse } from 'next/server';
import { slackService } from '@/app/lib/slack';
import { getUserInfoFromRequest, parseUserAgent } from '@/app/lib/user-info';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    // Get user info from request headers
    const userInfo = getUserInfoFromRequest(request, {
      userId: 'test-user-123',
      username: 'テストユーザー',
      email: 'test@example.com'
    });
    
    // Parse user agent for additional context
    const userAgentInfo = parseUserAgent(userInfo.userAgent);

    const notifications = [];
    
    // Test user registration notification
    try {
      const regResult = await slackService.notifyUserRegistration(userInfo, {
        registrationMethod: '通常登録',
        browserInfo: userAgentInfo
      });
      notifications.push({ type: 'user_registration', success: regResult });
    } catch (error) {
      notifications.push({ type: 'user_registration', success: false, error: String(error) });
    }

    // Test user login notification
    try {
      const loginResult = await slackService.notifyUserLogin(userInfo, {
        loginMethod: 'メール・パスワード',
        browserInfo: userAgentInfo
      });
      notifications.push({ type: 'user_login', success: loginResult });
    } catch (error) {
      notifications.push({ type: 'user_login', success: false, error: String(error) });
    }

    // Test data registration notification
    try {
      const dataRegResult = await slackService.notifyDataRegistration(userInfo, 'ドローン飛行記録', {
        flightDuration: '15分',
        location: '東京都千代田区',
        droneModel: 'DJI Mini 3',
        browserInfo: userAgentInfo
      });
      notifications.push({ type: 'data_registration', success: dataRegResult });
    } catch (error) {
      notifications.push({ type: 'data_registration', success: false, error: String(error) });
    }

    // Test data update notification
    try {
      const dataUpdateResult = await slackService.notifyDataUpdate(userInfo, 'ドローン飛行記録', {
        flightDuration: '20分（更新）',
        location: '東京都千代田区',
        droneModel: 'DJI Mini 3',
        updateReason: '飛行時間修正',
        browserInfo: userAgentInfo
      });
      notifications.push({ type: 'data_update', success: dataUpdateResult });
    } catch (error) {
      notifications.push({ type: 'data_update', success: false, error: String(error) });
    }

    return NextResponse.json({
      message: 'Test notifications completed',
      userInfo: {
        ...userInfo,
        browserInfo: userAgentInfo
      },
      results: notifications,
      slackConfigured: !!process.env.SLACK_WEBHOOK_URL
    });

  } catch (error) {
    console.error('Error in test notifications:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: String(error) },
      { status: 500 }
    );
  }
}