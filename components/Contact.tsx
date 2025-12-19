import React, { useState } from 'react';
import SectionHeader from './SectionHeader';
import { LINKEDIN_URL, GITHUB_URL, EMAIL_ADDRESS, PHONE_NUMBER } from '../constants';
import useOnScreen from '../hooks/useOnScreen';

const Contact: React.FC = () => {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const { name, email, subject, message } = formData;
      
      // Construct the email body
      const subjectLine = encodeURIComponent(subject || 'Portfolio Contact Form');
      const bodyContent = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );

      // Construct mailto link using the constant EMAIL_ADDRESS
      const mailtoLink = `mailto:${EMAIL_ADDRESS}?subject=${subjectLine}&body=${bodyContent}`;

      // Open user's email client
      window.location.href = mailtoLink;

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000); // Clear status message after 5 seconds
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-primary/10 dark:bg-dark-bg/60 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in Touch" />
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`max-w-xl mx-auto text-center text-gray-600 dark:text-text-muted transform transition-all duration-700 ${
            isVisible ? 'translate-y-0 opacity-100 animate-fade-in' : 'translate-y-8 opacity-0'
          }`}
          aria-hidden={!isVisible}
        >
          <p className="mb-8 text-lg">
            I'm always open to new opportunities, collaborations, and discussions. Fill out the form below to send me a message directly!
          </p>

          <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto space-y-6 text-left p-6 bg-white dark:bg-panel-bg backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-border-military">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-text-main mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-text-main border border-gray-300 dark:border-border-military focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors duration-200"
                aria-label="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-text-main mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-text-main border border-gray-300 dark:border-border-military focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors duration-200"
                aria-label="Your Email"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-900 dark:text-text-main mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-3 rounded-md bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-text-main border border-gray-300 dark:border-border-military focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors duration-200"
                aria-label="Subject"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-text-main mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
                className="w-full p-3 rounded-md bg-gray-50 dark:bg-dark-bg text-gray-900 dark:text-text-main border border-gray-300 dark:border-border-military focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-colors duration-200"
                aria-label="Your Message"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-8 py-3 bg-secondary text-white font-bold rounded-md shadow-lg hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-primary transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-live="polite"
            >
              {isSubmitting ? 'Opening Mail Client...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="mt-4 text-center text-secondary" role="status">
                Opening your email client to send the message...
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-4 text-center text-red-400" role="alert">
                Failed to open email client. Please copy the email address below.
              </p>
            )}
          </form>

          <p className="text-lg mt-12 mb-4">
            Alternatively, you can reach out via:
          </p>
          <div className="flex justify-center gap-6 mb-8">
            <a
              href={`mailto:${EMAIL_ADDRESS}`}
              className="p-4 rounded-full bg-secondary text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-primary transition-colors duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Email Mesuli Gama"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v13.438h24v-13.438l-12 9.725z"/></svg>
            </a>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="p-4 rounded-full bg-secondary text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-primary transition-colors duration-300 transform hover:scale-110 shadow-lg"
              aria-label="Call Mesuli Gama"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 18.333c0 1.94-.967 3.65-2.67 3.65-1.704 0-2.316-.76-3.832-1.89-1.516-1.13-2.92-2.83-4.498-4.408C7.545 13.92 5.845 12.516 4.715 11.002c-1.13-1.516-1.89-2.128-1.89-3.832 0-1.703 1.71-2.67 3.65-2.67 1.258 0 1.996.586 2.684 1.274.688.688 1.48 1.48 1.48 1.48l1.373 2.058c.28.419.23.957-.123 1.264l-1.42 1.42c-.2.2-.2.53 0 .73l2.83 2.83c.2.2.53.2.73 0l1.42-1.42c.307-.353.845-.403 1.264-.123l2.058 1.373s.792.792 1.48 1.48c.688.688 1.274 1.426 1.274 2.684z"/></svg>
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-primary transition-colors duration-300 transform hover:scale-110 shadow-lg"
              aria-label="LinkedIn Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-secondary text-white hover:bg-gray-800 dark:hover:bg-white hover:text-white dark:hover:text-primary transition-colors duration-300 transform hover:scale-110 shadow-lg"
              aria-label="GitHub Profile"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;