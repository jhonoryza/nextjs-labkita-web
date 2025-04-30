import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

interface ContactFormData {
    name: string;
    email: string;
    subject: string;
    message: string;
    captcha: string;
}

export async function POST(request: NextRequest) {
  const { name, email, subject, message, captcha }: ContactFormData = await request.json();
  // console.log(name, email, subject, message, captcha);

  const session = (await getIronSession(await cookies(), {
    password: process.env.COOKIE_SECRET || "",
    cookieName: process.env.COOKIE_NAME || "",
  })) as { captchaAnswer: string };

  if (captcha !== session.captchaAnswer) {
    return Response.json({ error: "Incorrect captcha answer." }, { status: 400 });
  }

  const smtpOptions: SMTPTransport.Options = {
    host: process.env.MAIL_HOST,
    port: parseInt(process.env.MAIL_PORT || "2525"),
    secure: process.env.MAIL_TLS === 'true',
    auth: {
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
    },
  };

  const transporter = nodemailer.createTransport(smtpOptions);

  const mailOptions = {
    from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
    to: process.env.MAIL_TO,
    subject: subject,
    html: `
            <h3>Message from ${name}</h3>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
        `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ error: "Error sending email" });
  }
}
