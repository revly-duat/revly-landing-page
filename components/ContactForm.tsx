import { useState } from "react";
import emailjs from "emailjs-com";

interface ContactFormProps {
  title: string;
  subtitle: string;
  fields: {
    company?: boolean;
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    message: boolean;
  };
  defaultMessage?: string; // Ny prop för hårdkodat meddelande
}

export const ContactForm: React.FC<ContactFormProps> = ({
  title,
  subtitle,
  fields,
  defaultMessage,
}) => {
  const [formData, setFormData] = useState({
    company: "",
    firstName: "",
    lastName: "",
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

    const combinedName = `${formData.firstName} ${formData.lastName}`;

    // Skapa payload och hantera hårdkodat meddelande
    const payload = {
      company: formData.company,
      name: combinedName,
      email: formData.email,
      message: fields.message ? formData.message : defaultMessage || "", // Använd hårdkodat meddelande om message är avstängt
    };

    try {
      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing required EmailJS environment variables");
      }

      await emailjs.send(serviceId, templateId, payload, publicKey);

      setIsSubmitted(true);
      setFormData({
        company: "",
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      setError(
        "Failed to send your message. Please try again. If the problem persists, contact us at info@revly.se."
      );
    }
  };

  return (
    <section
      id="contactForm"
      className="scroll-mt-[calc(20vh-96px)] py-32 px-6 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
          {title}
        </h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto rounded-xl p-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {fields.firstName && (
            <div>
              <label
                htmlFor="firstName"
                className="block text-md font-heading text-gray-700"
              >
                Förnamn
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Ditt förnamn"
                required
              />
            </div>
          )}
          {fields.lastName && (
            <div>
              <label
                htmlFor="lastName"
                className="block text-md font-heading text-gray-700"
              >
                Efternamn
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Ditt efternamn"
                required
              />
            </div>
          )}
          {fields.email && (
            <div className="md:col-span-2">
              <label
                htmlFor="email"
                className="block text-md font-heading text-gray-700"
              >
                E-postadress
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
                placeholder="Din e-postadress"
                required
              />
            </div>
          )}
        </div>

        {fields.message && (
          <div className="mb-12">
            <label
              htmlFor="message"
              className="block text-md font-heading text-gray-700"
            >
              Meddelande
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-cta focus:border-cta"
              placeholder="Hur kan vi hjälpa dig?"
              required
            ></textarea>
          </div>
        )}

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-12 py-2 text-xl font-heading text-white bg-cta rounded-xl shadow-md hover:bg-cta-hover hover:shadow-lg transition-shadow duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cta-color"
          >
            Skicka
          </button>
        </div>

        {isSubmitted && (
          <p className="text-green-500 mt-4 text-center">
            Tack för att du har av dig till Revly! Vi återkommer så snart vi
            kan.
          </p>
        )}
        {error && <p className="text-red-400 mt-4 text-center">{error}</p>}
      </form>
    </section>
  );
};
