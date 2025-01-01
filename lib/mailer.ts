import EkiliRelay from "ekilirelay";

interface MailerParams { 
  receiverEmail: string,
  subject: string,
  message: string,
  sender: string,
  senderEmail: string
}

const ekilirelay = new EkiliRelay(process.env.RELAY_API || "");

export default function mailer({ receiverEmail, subject, message, sender, senderEmail }: MailerParams) {
  ekilirelay.sendEmail(
      receiverEmail, // receiver's email
      subject, // subject
      message, // message
      `From: ${sender} <${senderEmail}>` // sender information
    )
    .then(response => {
      if (response.status === 'success') {
        console.log('Email sent successfully.');
      } else {
        console.log('Failed to send email: ' + response.message);
        console.log(response);
      }
    })
    .catch(error => {
      console.log('Error:', error);
    });
}