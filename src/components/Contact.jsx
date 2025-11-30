import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactDetails = [
    {
      icon: Mail,
      label: 'Email',
      value: 'info@heartlightke.com',
      href: 'mailto:heartlight@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 727 426317',
      href: 'tel:+254727426317',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: '32 Church View, Kenyatta Road',
      href: '#',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContactInfo details={contactDetails} />
          <ContactForm
            formData={formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            submitted={submitted}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
