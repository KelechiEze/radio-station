import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    console.log('📩 Received Form Data:', { name, email, phone, message });

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `📨 New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <table style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
            <tr>
              <td style="background-color: #f94144; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">📥 New Contact Submission</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Message:</strong></p>
                <div style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #f94144; margin-top: 10px;">
                  ${message}
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; color: #888; font-size: 12px;">
                RAP Radio Africa · Admin Inbox
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: '🎉 We’ve Received Your Inquiry!',
      html: `
        <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px;">
          <table style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); overflow: hidden;">
            <tr>
              <td style="background-color: #f94144; color: white; padding: 20px; text-align: center;">
                <h2 style="margin: 0;">Thanks, ${name}! ❤️</h2>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px;">
                <p>We’ve received your message and our team will respond shortly.</p>
                <p><strong>Your Message:</strong></p>
                <div style="background-color: #f4f4f4; padding: 15px; border-left: 4px solid #f94144; margin-top: 10px;">
                  ${message}
                </div>
                <p style="margin-top: 30px;">Meanwhile, feel free to follow us on <a href="https://x.com/rapradioafrica" style="color: #f94144;">Twitter</a>.</p>
                <div style="text-align: center; margin-top: 30px;">
                  <a href="https://rapradioafrica.com" style="background-color: #f94144; color: white; padding: 12px 20px; text-decoration: none; border-radius: 5px;">Visit Our Website</a>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 20px; text-align: center; color: #888; font-size: 12px;">
                RAP Radio Africa · Lagos, Nigeria<br/>
                This is an automated response to confirm receipt of your inquiry.
              </td>
            </tr>
          </table>
        </div>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    console.log('✅ Emails sent to admin and user.');

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Methods': 'POST',
        },
      }
    );
  } catch (err) {
    console.error('❌ Email Send Error:', err);
    return NextResponse.json(
      { message: 'Failed to send emails', error: err },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
