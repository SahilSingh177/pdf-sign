import nodemailer from "nodemailer";

export const sendMail = async (
  to: string,
  subject: string,
  body: string,
  attachments: {
    filename: string;
    content: string | Buffer;
  }[] = []
) => {
  let transport;
    if (true) {
      transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: "interestifyorg@gmail.com",
          pass: "",
        },
      });
    }


  if (!transport)
    throw new Error(
      "No valid transport for NodeMailer found. Probably Sendgrid API Key nor SMTP Mail host was set."
    );

  await transport
    .sendMail({
      from: process.env.MAIL_FROM,
      to: to,
      subject: subject,
      html: body,
      attachments: attachments,
    })
    .catch((err) => {
      throw err;
    });
};
