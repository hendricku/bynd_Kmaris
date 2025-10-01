import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    console.log('Env SMTP_USER:', process.env.SMTP_USER);
    console.log('Env SMTP_PASS:', process.env.SMTP_PASS ? '***' : 'Not Set');

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
      debug: true,
      logger: true,
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: 'New Free Consultation Request',
      text: `A user has requested a free consultation with email: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
          <div style=" padding: 10px; text-align: center;">
            <img src="cid:logo" alt="Website Logo" style="height: 50px;" />
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Dear Admin,</p>
            <p>A user has requested a free consultation with the following email address:</p>
            <p style="font-weight: bold; font-size: 16px;">${email}</p>
     
          </div>
        </div>
      `,
      attachments: [
        {
          filename: 'Logo.png',
          path: './public/Logo.png',
          cid: 'logo',
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: `Failed to send email: ${(error as Error).message}` }, { status: 500 });
  }
}
