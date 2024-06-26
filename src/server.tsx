import axios from 'axios';

async function send_mail(visitor_email: string, visitor_msg: string) {
  try {
    let response = await axios.post(
      process.env.REACT_APP_SEND_MAIL_URL!, {
        email: visitor_email,
        message: visitor_msg
      })
    .then((response) => {
        return response.status;
    });
    return response;
  } catch (error) {
    return 500;
  }
}

export default send_mail;
