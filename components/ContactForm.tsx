import { useState } from "react";
import emailjs from "emailjs-com";

interface ContactFormProps {
  fields: {
    company?: boolean;
    name: boolean;
    email: boolean;
    message: boolean;
  };
}

export const ContactForm: React.FC<ContactFormProps> = ({ fields }) => {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsSubmitted(false);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
    const templateId =
      process.env.NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID || "";
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing required EmailJS environment variables");
      }

      await emailjs.send(serviceId, templateId, formData, publicKey);

      setIsSubmitted(true);
      setFormData({ company: "", name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message:", err);
      setError(
        "Failed to send your message. Please try again. If you keep getting this error, please send an email directly to info@revly.se"
      );
    }
  };

  return (
    <section
      id="contactForm"
      className="scroll-mt-[calc(50vh-96px)] pb-16 px-6 sm:px-6 lg:px-8 bg-gray-100"
    >
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto rounded-xl p-6"
      >
        <div className="grid grid-cols-1 gap-6 mb-6">
          {fields.company && (
            <div>
              <label
                htmlFor="company"
                className="block text-sm font-almaroseSemiBold text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Company name"
              />
            </div>
          )}
          {fields.name && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-almaroseSemiBold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Your name"
                required
              />
            </div>
          )}
          {fields.email && (
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-almaroseSemiBold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Your email"
                required
              />
            </div>
          )}
        </div>
        {fields.message && (
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-almaroseSemiBold text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
              placeholder="How can we help you?"
              required
            ></textarea>
          </div>
        )}
        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 text-lg font-almaroseSemiBold text-white bg-cta rounded-xl shadow-md hover:bg-cta-hover hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
        {isSubmitted && (
          <div className="flex justify-center">
            <p className="text-green-500 mt-4">
              Thank you for getting in contact with us! We will get back to you
              as soon as possible.
            </p>
          </div>
        )}
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </form>
    </section>
  );
};
