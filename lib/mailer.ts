import EkiliRelay from "ekilirelay";

const ekilirelay = new EkiliRelay(process.env.RELAY_API_KEY || "");

export default function mailer(
  receiverEmail: string, 
  subject: string, 
  message: string, 
  sender: string, 
  senderEmail: string
) {
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
