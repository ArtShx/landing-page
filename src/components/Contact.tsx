import {BsFillSendFill} from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import send_mail from "./../server";

const my_email = "miada.arthur@gmail.com"

const handleSubmit = async (e: React.SyntheticEvent) => {
  e.preventDefault();
  const target = e.target as typeof e.target & {
    email: { value: string };
    message: { value: string };
  };

  const email = target.email.value;
  const message = target.message.value;
  let statuscode = send_mail(email, message);
  toast.info("Sending message ...");
  if (await statuscode == 200) {
    let msg = "Thanks for your contact! Message received!";
    toast.success(msg);
  } else {
    let msg = "Something unexpected happenned, failed to send messsage. Really sorry for the inconvenience.";
    toast.error(msg);
  }
}

function ContactMe() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>
      <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me at <a className="underline" href={ "mailto:" + my_email }>{ my_email }</a> or through this form.</p>
      <form className="mt-10 flex flex-col dark:text-black" onSubmit={handleSubmit}>
        <input name="email" className="h-14 px-4 rounded-lg border-2 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your email" type="email" required />
        <textarea name="message" className="h-52 my-3 rounded-lg border-2 borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your message" required />
        <button className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40 w-28 ml-auto ">Send<BsFillSendFill /></button>
      </form>
      <ToastContainer />
    </section>
  )
}

export default ContactMe;
