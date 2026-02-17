import nodemailer from "nodemailer";

class Mailservice {

  createTransporter() {
    return nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  async sendContactMail(contact) {
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    throw new Error("Email credentials missing in environment variables");
  }

    console.log("MAIL CHECK:", process.env.EMAIL_USER); 

    const transporter = this.createTransporter();

    const { Name, Email, Phone, JobEnquiry, Textarea } = contact;

    await transporter.sendMail({
      from: `"Portfolio" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Contact: ${JobEnquiry}`,
      html: `
        <h2>New Portfolio Contact</h2>
        <p><b>Name:</b> ${Name}</p>
        <p><b>Email:</b> ${Email}</p>
        <p><b>Phone:</b> ${Phone}</p>
        <p><b>Type:</b> ${JobEnquiry}</p>
        <p><b>Message:</b> ${Textarea}</p>
      `,
    });
  }
}

export default Mailservice;
