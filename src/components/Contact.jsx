import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const  Contact = () =>  {
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
    setFormData(prev => ({
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
      value: 'heartlight@gmail.com',
      href: 'mailto:contact@company.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 727 426317',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Address',
      value: 'Nairobi, Kenya',
      href: '#',
    },
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-slate-100 py-4 px-4 sm:px-64 lg:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
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
}

export default Contact;
