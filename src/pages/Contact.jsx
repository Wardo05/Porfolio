import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
    )
    .then(
      () => {
        alert("Message sent successfully!");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message.");
        console.error(error);
      }
    );
  };

  return (
<section className="contact min-h-screen flex justify-center items-center">
  <form ref={form} onSubmit={sendEmail} className="w-full max-w-md bg-white p-8 rounded shadow">
    <h1 className="text-2xl font-bold mb-6 text-center">Contact Me</h1>
    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <textarea
      name="message"
      placeholder="Your Message"
      required
      className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <button
      type="submit"
      className="w-full py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition-colors"
    >
      Send
    </button>
  </form>
</section>

  );
}
