import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, package: selectedPackage, message } = body;

    // Create transporter with Gmail service (use your own credentials in .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password or real password
      },
    });

    // Email to admin (you)
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL, // your admin email to receive inquiries
      subject: `New Inquiry from ${name}`,
      html: `
        <h2>New Inquiry Received</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Selected Package:</strong> ${selectedPackage}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'We’ve Received Your Inquiry!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px;">
          <h2 style="color: #2a9d8f;">Thank You, ${name}!</h2>
          <p>We’ve received your message and our team will get back to you shortly.</p>
          <hr style="margin: 20px 0;" />
          <h4 style="color: #264653;">Here’s a summary of your submission:</h4>
          <p><strong>Package:</strong> ${selectedPackage}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Your Message:</strong></p>
          <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">${message}</blockquote>
          <p style="margin-top: 30px;">Warm regards,<br /><strong>The [Your Business Name] Team</strong></p>
          <p style="font-size: 12px; color: #888;">This is a confirmation email. Please do not reply directly.</p>
        </div>
      `,
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return new Response(JSON.stringify({ message: 'Emails sent successfully' }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ message: 'Failed to send emails' }), { status: 500 });
  }
}
