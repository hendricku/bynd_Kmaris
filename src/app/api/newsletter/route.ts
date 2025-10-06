import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json();

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    console.log('Env SMTP_USER:', process.env.SMTP_USER);
    console.log('Env SMTP_PASS:', process.env.SMTP_PASS ? '***' : 'Not Set');
    console.log('Env SMTP_HOST:', process.env.SMTP_HOST);
    console.log('Env SMTP_PORT:', process.env.SMTP_PORT);
    console.log('Env FROM_EMAIL:', process.env.FROM_EMAIL);
    console.log('Env TO_EMAIL:', process.env.TO_EMAIL);

    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
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

    // Verify transporter configuration
    await transporter.verify();

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: 'New Free Consultation Request',
      text: `A user has requested a free consultation with the following details:
First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px;">
          <div style="padding: 10px; text-align: center; background-color: #f5f5f5;">
            <h2 style="color: #333; margin: 0;">New Consultation Request</h2>
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Dear Admin,</p>
            <p>A user has requested a free consultation with the following details:</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <hr style="border: 0; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #666;">This is an automated message from your website contact form.</p>
          </div>
        </div>
      `,
     
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${(error as Error).message}` },
      { status: 500 }
    );
  }
}