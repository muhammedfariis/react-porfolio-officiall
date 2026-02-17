import { Resend } from "resend";

class Mailservice {
  constructor() {
    this.resend = new Resend("re_KTox9VLT_EYNiYjCdhcQfBCWgMwRn4nc9");    
  }

  async sendContactMail(contact) {
    const { Name, Email, Phone, JobEnquiry, Textarea } = contact;

    await this.resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
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
