import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email } = await request.json();

    // Validate input
    if (!firstName || !lastName || !email) {
      return NextResponse.json(
        { error: 'First name, last name, and email are required' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        { error: 'Email service not configured properly' },
        { status: 500 }
      );
    }

    // Create transporter
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
    });

    // Verify transporter configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service connection failed' },
        { status: 500 }
      );
    }

    // Logo Deployed online Test grrr
    const logoUrl = 'https://kmarisimmigration.vercel.app/Logo.png';

    
    console.log('Using logo URL:', logoUrl);

    const mailOptions = {
      from: process.env.FROM_EMAIL || process.env.SMTP_USER,
      to: process.env.TO_EMAIL || process.env.SMTP_USER,
      subject: 'New Free Consultation Request',
      text: `A user has requested a free consultation with the following details:

First Name: ${firstName}
Last Name: ${lastName}
Email: ${email}

Please respond to this consultation request at your earliest convenience.`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Consultation Request</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td align="center" style="padding: 20px 0;">
                <table role="presentation" style="width: 600px; max-width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #dddddd; border-radius: 8px; overflow: hidden;">
                  <!-- Header with Logo -->
                  <tr>
                    <td align="center" style="padding: 30px 20px; background-color: #f8f9fa;">
                      <img src="${logoUrl}" alt="Company Logo" style="height: 60px; max-width: 250px; display: block;" />
                    </td>
                  </tr>
                  
                  <!-- Content -->
                  <tr>
                    <td style="padding: 40px 30px;">
                      <h2 style="margin: 0 0 20px 0; color: #333333; font-size: 24px; font-weight: 600;">New Consultation Request</h2>
                      
                      <p style="margin: 0 0 20px 0; color: #555555; font-size: 16px; line-height: 1.5;">
                        A new user has requested a free consultation. Please find the details below:
                      </p>
                      
                      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa; border-radius: 6px; padding: 20px;">
                        <tr>
                          <td style="padding: 12px 20px; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #333333; font-size: 14px;">First Name:</strong>
                            <span style="color: #555555; font-size: 14px; margin-left: 10px;">${firstName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 20px; border-bottom: 1px solid #e9ecef;">
                            <strong style="color: #333333; font-size: 14px;">Last Name:</strong>
                            <span style="color: #555555; font-size: 14px; margin-left: 10px;">${lastName}</span>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding: 12px 20px;">
                            <strong style="color: #333333; font-size: 14px;">Email:</strong>
                            <a href="mailto:${email}" style="color: #007bff; text-decoration: none; margin-left: 10px; font-size: 14px;">${email}</a>
                          </td>
                        </tr>
                      </table>
                      
                      <p style="margin: 30px 0 0 0; color: #666666; font-size: 14px; line-height: 1.5;">
                        Please respond to this consultation request at your earliest convenience.
                      </p>
                    </td>
                  </tr>
                  
                  <!-- Footer -->
                  <tr>
                    <td style="padding: 20px 30px; background-color: #f8f9fa; border-top: 1px solid #dddddd;">
                      <p style="margin: 0; color: #999999; font-size: 12px; line-height: 1.5; text-align: center;">
                        This is an automated notification from your website consultation form.
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `
    };

    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully to:', mailOptions.to);
    return NextResponse.json({ 
      message: 'Email sent successfully',
      success: true 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: process.env.NODE_ENV === 'development' ? (error as Error).message : undefined
      },
      { status: 500 }
    );
  }
}