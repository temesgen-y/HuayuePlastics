export interface TelegramMessage {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export async function sendToTelegram(data: TelegramMessage): Promise<boolean> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN || "7588540195:AAFvF4phJg8agz1xcVEmkGxbLXvldOZAXh8";
  const chatId = process.env.TELEGRAM_CHAT_ID || "-1002686029268";

  const telegramMessage = `
🔔 *New Contact Form Submission*

👤 *Name:* ${data.name}
📧 *Email:* ${data.email}
📞 *Phone:* ${data.phone}

💬 *Message:*
${data.message}

⏰ *Time:* ${new Date().toLocaleString()}
  `;

  try {
    const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'Markdown'
      }),
    });

    if (!response.ok) {
      console.error('Telegram API error:', await response.text());
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error sending to Telegram:', error);
    return false;
  }
}
