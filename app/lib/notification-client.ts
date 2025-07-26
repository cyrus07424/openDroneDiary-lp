interface NotificationPayload {
  userId?: string;
  username?: string;
  email?: string;
  additionalData?: Record<string, unknown>;
  [key: string]: unknown;
}

interface DataNotificationPayload extends NotificationPayload {
  dataType: string;
  dataInfo?: Record<string, unknown>;
}

export class NotificationClient {
  private baseUrl: string;

  constructor(baseUrl = '') {
    this.baseUrl = baseUrl;
  }

  private async sendNotification(endpoint: string, payload: Record<string, unknown>): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/api/notifications/${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      return response.ok;
    } catch (error) {
      console.error(`Failed to send ${endpoint} notification:`, error);
      return false;
    }
  }

  async notifyUserRegistration(payload: NotificationPayload): Promise<boolean> {
    return this.sendNotification('user-registration', payload);
  }

  async notifyUserLogin(payload: NotificationPayload): Promise<boolean> {
    return this.sendNotification('user-login', payload);
  }

  async notifyDataRegistration(payload: DataNotificationPayload): Promise<boolean> {
    return this.sendNotification('data-registration', payload);
  }

  async notifyDataUpdate(payload: DataNotificationPayload): Promise<boolean> {
    return this.sendNotification('data-update', payload);
  }
}

// Default instance for easy use
export const notificationClient = new NotificationClient();