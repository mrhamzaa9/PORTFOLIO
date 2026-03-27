import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState(null); // sending | success | error

  const onSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.target);
    formData.append("access_key", "e00c6b84-f31d-4624-8935-3da5167a88bb");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    // Auto hide alert
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <>
      {/* Toast Alert */}
      {status && (
        <div className="fixed top-6 right-6 z-50">
          <div
            className={`px-6 py-4 rounded-xl shadow-lg text-sm text-white transition
              ${
                status === "sending"
                  ? "bg-pink-600"
                  : status === "success"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
          >
            {status === "sending" && "Sending message..."}
            {status === "success" && "Message sent successfully ✅"}
            {status === "error" && "Something went wrong ❌"}
          </div>
        </div>
      )}

      {/* Form Section */}
      <section className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 py-24">

          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Contact{" "}
            <span className="bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>

          <p className="text-gray-400 text-center mb-12">
            Feel free to reach out for collaborations, projects, or opportunities.
          </p>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
            <form onSubmit={onSubmit} className="space-y-6">

              <div>
                <label className="block text-sm mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">Message</label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-pink-500 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-gradient-to-r from-indigo-400 to-pink-500 hover:from-indigo-500 hover:to-pink-600 transition py-3 rounded-xl font-medium disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Send Message"}
              </button>

            </form>
          </div>
        </div>
      </section>
    </>
  );
}