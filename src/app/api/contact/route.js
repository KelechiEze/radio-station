import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

// ✅ Handle preflight CORS (OPTIONS)
export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        {
          status: 400,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const styledWrapper = (innerHtml) => `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; padding: 30px; background-color: #fff; color: #333;">
        ${innerHtml}
        <div style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
          RAP Radio Africa · Lagos, Nigeria
        </div>
      </div>
    `;

    const adminMailOptions = {
      from: `RAP Radio Africa <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📨 New Inquiry from ${name}`,
      html: styledWrapper(`
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="width: 80px; height: 80px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, #f94144, #f3722c); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(249, 65, 68, 0.3);">
            <span style="color: white; font-size: 2rem; font-weight: bold;">📨</span>
          </div>
          <h2 style="color: #f94144; font-size: 2rem; margin: 0; font-weight: 900;">New Contact Inquiry</h2>
        </div>
        <div style="background: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); margin-bottom: 30px;">
          <div style="display: grid; gap: 20px;">
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #f94144;">
              <strong>👤 Name:</strong><br/> ${name}
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #f94144;">
              <strong>📧 Email:</strong><br/> ${email}
            </div>
            <div style="padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #f94144;">
              <strong>📱 Phone:</strong><br/> ${phone || 'Not provided'}
            </div>
            <div style="padding: 20px; background: linear-gradient(135deg, #f94144, #f3722c); border-radius: 12px; color: white;">
              <strong>💬 Message:</strong>
              <div style="margin-top: 10px;">${message.replace(/\n/g, '<br/>')}</div>
            </div>
          </div>
        </div>
      `),
    };

    const userMailOptions = {
      from: `RAP Radio Africa <${process.env.EMAIL_USER}>`,
      to: email,
      subject: '🎉 We’ve Received Your Inquiry!',
      html: styledWrapper(`
        <div style="text-align: center; margin-bottom: 30px;">
          <div style="width: 100px; height: 100px; margin: 0 auto 20px; border-radius: 50%; background: linear-gradient(135deg, #f94144, #f3722c); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 32px rgba(249, 65, 68, 0.3);">
            <span style="color: white; font-size: 2.5rem;">🎉</span>
          </div>
          <h2 style="color: #f94144; font-size: 2.2rem; margin: 0;">Thank You, ${name}!</h2>
        </div>

        <p style="font-size: 1.1rem; line-height: 1.6; margin-bottom: 20px;">
          We’ve received your message and our team will get back to you shortly.
        </p>

        <div style="background: linear-gradient(135deg, #f94144, #f3722c); padding: 20px; border-radius: 12px; color: white;">
          <strong>Your Message:</strong><br/>
          <div style="margin-top: 10px;">${message.replace(/\n/g, '<br/>')}</div>
        </div>
      `),
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      {
        status: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (err) {
    console.error('Email error:', err);
    return NextResponse.json(
      { message: 'Failed to send emails', error: err.message },
      {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
