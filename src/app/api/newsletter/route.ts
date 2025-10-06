import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { readFile } from 'fs/promises';
import { join } from 'path';

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

    // Read the logo file from public folder
    let logoAttachment;
    try {
      const logoPath = join(process.cwd(), 'public', 'Logo.png');
      const logoBuffer = await readFile(logoPath);
      logoAttachment = {
        filename: 'Logo.png',
        content: logoBuffer,
        cid: 'logo',
      };
      console.log('Logo loaded successfully');
    } catch (logoError) {
      console.error('Error loading logo:', logoError);
      // Continue without logo if it fails
      logoAttachment = null;
    }

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
          <div style="padding: 10px; text-align: center;">
            ${logoAttachment ? '<img src="cid:logo" alt="Website Logo" style="height: 50px;" />' : '<h2 style="color: #333; margin: 0;">New Consultation Request</h2>'}
          </div>
          <div style="padding: 20px; color: #333;">
            <p>Dear Admin,</p>
            <p>A user has requested a free consultation with the following details:</p>
            <p><strong>First Name:</strong> ${firstName}</p>
            <p><strong>Last Name:</strong> ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
        </div>
      `,
      attachments: logoAttachment ? [logoAttachment] : [],
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