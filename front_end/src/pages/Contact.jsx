import React, { useState } from "react";
import toast from 'react-hot-toast';
import axios from "axios";
import { FaPaperPlane } from "react-icons/fa6";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await axios.post(
         `${import.meta.env.VITE_BACKEND_URL}/sendmsg`,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      );
      console.log(response);
      console.log(response.data.message);
      toast.success(response?.data?.message || "Message sent! I'll be in touch soon.");
      
      setStatus("Message sent! I'll be in touch soon.");

      e.target.reset();
    } catch (error) {
      setStatus("Something went wrong. Please try again.");
      toast.error(error?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen overflow-hidden bg-[#0b0b0c] text-white flex flex-col justify-center py-20 lg:py-32"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(234,179,8,0.1),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_50%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-12">
        <div className="flex flex-col items-center border-b border-white/10 pb-16 text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-yellow-400">
            Get in Touch
          </p>

          <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-7xl">
            Let's build something{" "}
            <span className="text-yellow-400">exceptional</span> together
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
            Have a vision or a technical challenge? At{" "}
            <span className="text-yellow-400 font-semibold">
              Coding Gallery by Vishal Maurya
            </span>
            , we're ready to transform your ideas into precision-engineered
            reality.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Ready to discuss your needs and build something practical
                together. Web development available now, with mobile and VLSI
                services coming soon.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/3 p-6 transition-all hover:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:vishalmaurya8459@gmail.com"
                    className="text-lg font-semibold text-white hover:text-yellow-400 transition"
                  >
                    vishalmaurya8459@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/3 p-6 transition-all hover:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+918459588922"
                    className="text-lg font-semibold text-white hover:text-yellow-400 transition"
                  >
                    +91 84595 88922
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-3xl border border-white/10 bg-white/3 p-6 transition-all hover:bg-white/5">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-400">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mb-1">
                    Location
                  </p>
                  <p className="text-lg font-semibold text-white">
                    Gorakhpur, UP, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] p-8 border border-white/10 bg-white/3  md:p-10 backdrop-blur-xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-8">Send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white placeholder:text-gray-400 backdrop-blur-md transition focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white placeholder:text-gray-400 backdrop-blur-md transition focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  onChange={handleChange}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/4 px-4 py-3 text-white placeholder:text-gray-400 backdrop-blur-md transition focus:border-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400/20"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full rounded-2xl bg-yellow-500 px-4 py-3 text-lg font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-500/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:translate-y-0"
              >
                {status === "Sending..." ? (
                  <span className="flex items-center justify-center gap-2">
                    <FaPaperPlane className="animate-pulse h-4 w-4" />
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="h-4 w-4 ml-2 inline" />
                  </>
                )}
              </button>

              {status && (
                <p
                  className={`text-center text-sm ${
                    status.includes("sent") ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
