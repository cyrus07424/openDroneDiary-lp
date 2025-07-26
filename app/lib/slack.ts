interface UserInfo {
  userId?: string;
  username?: string;
  email?: string;
  userAgent: string;
  ipAddress: string;
}

interface NotificationData {
  type: 'user_registration' | 'user_login' | 'data_registration' | 'data_update';
  user: UserInfo;
  additionalData?: Record<string, unknown>;
  timestamp?: Date;
}

export class SlackNotificationService {
  private webhookUrl: string;

  constructor() {
    this.webhookUrl = process.env.SLACK_WEBHOOK_URL || '';
    if (!this.webhookUrl) {
      console.warn('SLACK_WEBHOOK_URL not configured');
    }
  }

  private formatMessage(data: NotificationData): Record<string, unknown> {
    const timestamp = data.timestamp || new Date();
    const formattedTime = timestamp.toLocaleString('ja-JP', {
      timeZone: 'Asia/Tokyo',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    let title = '';
    let color = '';
    let description = '';

    switch (data.type) {
      case 'user_registration':
        title = '🆕 新規ユーザー登録';
        color = '#36a64f'; // green
        description = '新しいユーザーが登録されました';
        break;
      case 'user_login':
        title = '🔑 ユーザーログイン';
        color = '#2eb886'; // blue-green
        description = 'ユーザーがログインしました';
        break;
      case 'data_registration':
        title = '📝 データ登録';
        color = '#ff9500'; // orange
        description = '新しいデータが登録されました';
        break;
      case 'data_update':
        title = '✏️ データ更新';
        color = '#ffcc00'; // yellow
        description = 'データが更新されました';
        break;
    }

    const fields = [
      {
        title: 'ユーザー情報',
        value: data.user.username || data.user.userId || '不明',
        short: true
      },
      {
        title: 'メールアドレス',
        value: data.user.email || '不明',
        short: true
      },
      {
        title: 'IPアドレス',
        value: data.user.ipAddress,
        short: true
      },
      {
        title: '時刻',
        value: formattedTime,
        short: true
      }
    ];

    // ユーザーエージェント情報を追加
    if (data.user.userAgent) {
      fields.push({
        title: 'ユーザーエージェント',
        value: data.user.userAgent.length > 100 
          ? data.user.userAgent.substring(0, 97) + '...'
          : data.user.userAgent,
        short: false
      });
    }

    // 追加データがある場合
    if (data.additionalData) {
      Object.entries(data.additionalData).forEach(([key, value]) => {
        fields.push({
          title: key,
          value: typeof value === 'object' ? JSON.stringify(value) : String(value),
          short: true
        });
      });
    }

    return {
      attachments: [
        {
          color: color,
          title: title,
          text: description,
          fields: fields,
          footer: 'OpenDroneDiary',
          ts: Math.floor(timestamp.getTime() / 1000)
        }
      ]
    };
  }

  async sendNotification(data: NotificationData): Promise<boolean> {
    if (!this.webhookUrl) {
      console.warn('Slack webhook URL not configured, skipping notification');
      return false;
    }

    try {
      const message = this.formatMessage(data);
      
      const response = await fetch(this.webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      });

      if (!response.ok) {
        console.error('Failed to send Slack notification:', response.status, response.statusText);
        return false;
      }

      console.log('Slack notification sent successfully:', data.type);
      return true;
    } catch (error) {
      console.error('Error sending Slack notification:', error);
      return false;
    }
  }

  async notifyUserRegistration(user: UserInfo, additionalData?: Record<string, unknown>): Promise<boolean> {
    return this.sendNotification({
      type: 'user_registration',
      user,
      additionalData
    });
  }

  async notifyUserLogin(user: UserInfo, additionalData?: Record<string, unknown>): Promise<boolean> {
    return this.sendNotification({
      type: 'user_login',
      user,
      additionalData
    });
  }

  async notifyDataRegistration(user: UserInfo, dataType: string, additionalData?: Record<string, unknown>): Promise<boolean> {
    return this.sendNotification({
      type: 'data_registration',
      user,
      additionalData: {
        dataType,
        ...additionalData
      }
    });
  }

  async notifyDataUpdate(user: UserInfo, dataType: string, additionalData?: Record<string, unknown>): Promise<boolean> {
    return this.sendNotification({
      type: 'data_update',
      user,
      additionalData: {
        dataType,
        ...additionalData
      }
    });
  }
}

export const slackService = new SlackNotificationService();