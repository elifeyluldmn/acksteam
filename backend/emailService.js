// emailService.js
const nodemailer = require("nodemailer");

const sendEmail = async (recipientEmail, reservationDetails) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",  // Kendi e-posta sağlayıcınızı kullanabilirsiniz
    auth: {
      user: "your-email@gmail.com",  // E-posta adresiniz
      pass: "your-email-password",   // E-posta şifreniz
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: recipientEmail,
    subject: "New Reservation Received",
    text: `You have a new reservation!\n\nDetails:\n${reservationDetails}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

module.exports = sendEmail;
