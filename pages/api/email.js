const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);
export default async (req, res) => {
  console.log(req.body);
  const data = {
    to: "gnyserhan@gmail.com",
    from: { name: "Bensem", email: "gnyserhan@gmail.com" },
    templateId: "d-e57eab9efad44a36beda232ea709048d",
    dynamic_template_data: {
      email: req.body.email,
      name: req.body.name,
      message: req.body.message,
    },
  };
  try {
    await mail.send(data);
    res.status(200).json(data);
  } catch (error) {
    res.json({ error: error.message });
  }
};
