import axios from 'axios';

async function send_mail() {
  try {
    return await axios.get(process.env.REACT_APP_SEND_MAIL_URL);
  } catch (error) {
    console.error(error);
  }
}

export default send_mail;
