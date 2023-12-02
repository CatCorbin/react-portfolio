const nodemailer = require('nodemailer');

exports.handler = async function (event, context) {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'catcorbin0919@gmail.com',
        pass: '900072756',
      },
    });

    const { name, email, message } = JSON.parse(event.body);

    const mailOptions = {
      from: 'catcorbin0919@gmail.com',
      to: 'catcorbin0919@gmail.com',
      subject: 'New Form Submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    const result = await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully', result }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error }),
    };
  }
};