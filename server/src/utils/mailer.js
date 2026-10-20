import nodemailer from 'nodemailer';

let transporter = null;

function getTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) return null;

  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS }
    });
  }
  return transporter;
}

// Sends Adhya an email when someone submits the contact form (skipped if SMTP is not configured)
export async function sendContactNotification({ name, email, message }) {
  const mailer = getTransporter();
  if (!mailer) return;

  await mailer.sendMail({
    from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
    to: process.env.NOTIFY_EMAIL || process.env.SMTP_USER,
    replyTo: email,
    subject: `✦ New portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`
  });
}
