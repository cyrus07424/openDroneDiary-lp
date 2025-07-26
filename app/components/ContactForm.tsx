'use client';

import { useState } from 'react';
import { notificationClient } from '@/app/lib/notification-client';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate a contact form submission notification
      const success = await notificationClient.notifyDataRegistration({
        username: formData.name,
        email: formData.email,
        dataType: 'お問い合わせ',
        dataInfo: {
          message: formData.message,
          formType: 'contact'
        },
        additionalData: {
          source: 'ランディングページ',
          timestamp: new Date().toISOString()
        }
      });

      if (success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-24 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-blue mb-4">
              お問い合わせ
            </h2>
            <p className="text-xl text-gray-600">
              ご質問やご要望がございましたら、お気軽にお問い合わせください
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-deep-blue"
                  placeholder="例: 山田太郎"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-deep-blue"
                  placeholder="例: yamada@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-deep-blue focus:border-deep-blue"
                  placeholder="ご質問やご要望をお書きください"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-deep-blue hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-3 px-4 rounded-md transition-colors"
                >
                  {isSubmitting ? '送信中...' : '送信する'}
                </button>
              </div>

              {submitStatus === 'success' && (
                <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
                  お問い合わせありがとうございます。内容を確認次第、ご連絡いたします。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-center p-4 bg-red-100 text-red-700 rounded-md">
                  送信に失敗しました。時間をおいて再度お試しください。
                </div>
              )}
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-600">
            <p>
              このお問い合わせフォームは、Slack通知システムのデモンストレーションです。<br />
              実際の運用時は、フォームデータの保存や返信機能も実装されます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}