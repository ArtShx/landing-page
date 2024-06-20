const SEND_LOGO = process.env.PUBLIC_URL + '/send.png'

function ContactMe() {
  return (
    <section id="contact" className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto">
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">Contact me</h2>
      <p className="text-gray-700 -mt-6 dark:text-white/80">Please contact me at ... or through this form.</p>
      <form className="mt-10 flex flex-col dark:text-black">
        <input name="email" className="h-14 px-4 rounded-lg border-2 borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your email" />
        <textarea name="message" className="h-52 my-3 rounded-lg border-2 borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" placeholder="Your message" />
        <button className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-1 rounded-full outline-none focus:scale-105 hover:scale-105 active:scale-105 transition border-2 border-white border-opacity-40 w-28 ml-auto ">Send<img src={SEND_LOGO} className="w-5 -translate-x-2"/></button>
      </form>

    </section>
  )
}
export default ContactMe;
