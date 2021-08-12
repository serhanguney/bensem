const nodemailer = require("nodemailer");

class Email {
  constructor(user) {
    this.from = user.from;
    this.fullName = user.fullName;
    this.message = user.message;
  }
  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "gnyserhan@gmail.com",
        pass: process.env.NEXT_PUBLIC_PASSWORD,
      },
    });
  }
  async send() {
    const mailOptions = {
      from: this.from,
      to: "gnyserhan@gmail.com",
      subject: "Client Inquiry for Bensem",
      text: this.message,
    };
    this.newTransport().sendMail(mailOptions, () => console.log("email send"));
  }
}
export default async (req, res) => {
  // const data = {
  //   to: "gnyserhan@gmail.com",
  //   from: { name: req.body.name, email: req.body.email },
  //   templateId: "d-e57eab9efad44a36beda232ea709048d",
  //   dynamic_template_data: {
  //     email: req.body.email,
  //     name: req.body.name,
  //     message: req.body.message,
  //   },
  // };

  // try {
  //   await mail.send(data);
  //   res.status(200).json(data);
  // } catch (error) {
  //   res.json({ error: error.message });
  // }

  const email = new Email({
    from: req.body.from,
    fullName: req.body.fullName,
    message: req.body.message,
  });
  try {
    await email.send();
    res.json({
      status: "success",
    });
  } catch (err) {
    res.json({
      error: err.message,
    });
  }
};
