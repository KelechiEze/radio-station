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
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We’ve Received Your Inquiry!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #2a9d8f;">Thank You, ${name}!</h2>
          <p>We’ve received your message and our team will get back to you shortly.</p>
          <hr />
          <p><strong>Your Message:</strong></p>
          <blockquote>${message}</blockquote>
          <p style="margin-top: 20px;">Warm regards,<br /><strong>The RAP Radio Africa Team</strong></p>
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
