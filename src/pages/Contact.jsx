import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_USER_ID"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setIsSending(false);
        },
        (error) => {
          alert("An error occurred, please try again.");
          setIsSending(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="p-10 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 text-center text-gray-800"
    >
      <h2 className="text-5xl font-bold mb-4 text-gray-700 fade-in">Contact Me</h2>
      <p className="mb-8 text-lg text-gray-600 fade-in delay-1">
        Let’s create something wonderful together!
      </p>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col gap-5 max-w-md mx-auto bg-white/70 p-8 rounded-3xl shadow-xl backdrop-blur-sm transition-all transform hover:shadow-2xl hover:scale-105 fade-in delay-2"
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg p-4 text-gray-700 bg-white/90"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="input input-bordered focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg p-4 text-gray-700 bg-white/90"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="textarea textarea-bordered focus:outline-none focus:ring-2 focus:ring-pink-300 rounded-lg p-4 text-gray-700 bg-white/90"
          required
        ></textarea>
        <button
          type="submit"
          className="btn flex items-center justify-center gap-2 p-3 mt-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 hover:shadow-pink-400/50 transition-transform duration-200 ease-in-out relative"
          disabled={isSending}
        >
          {isSending ? (
            <span className="loader"></span>
          ) : (
            <>
              <FaPaperPlane className="text-lg animate-bounce" /> Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;
