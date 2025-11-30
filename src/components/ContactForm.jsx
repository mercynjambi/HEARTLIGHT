import { CheckCircle } from 'lucide-react';

const ContactForm = ({ formData, handleChange, handleSubmit, submitted }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Send us a Message
      </h2>

      {submitted ? (
        <div className="flex flex-col items-center justify-center py-12">
          <div className="text-center">
            <CheckCircle className="w-14 h-14" style={{ color: '#566E6D' }} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Message Sent Successfully!
            </h3>
            <p className="text-gray-600 text-sm">
              Thank you for reaching out. We'll get back to you soon.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none transition-all"
                style={{ focusRing: '#566E6D' }}
                placeholder="John Mwangi"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none transition-all"
                placeholder="john@gmail.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none transition-all"
              placeholder="+254 700 000000"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none transition-all"
              placeholder="How can we help?"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1.5">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg outline-none transition-all resize-none"
              placeholder="Tell us more about your inquiry..."
            />
          </div>

          <button
            type="submit"
            className="w-full text-white font-semibold py-2.5 rounded-lg transition-colors shadow-sm hover:shadow-md"
            style={{
              backgroundColor: '#566E6D',
              borderColor: '#566E6D',
              transition: '0.3s',
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#435554')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#566E6D')}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
