import ServiceCard from './ServiceCard';
import { FileText, Tent, Droplets } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: 'Payment of mortuary bill',
      description: 'For a maximum of 10 days',
    },
    {
      icon: <Tent className="w-8 h-8 text-secondary" />,
      title: 'Provision of burial gear',
      description: 'Lowering gear, trolley and gazebo tent',
    },
    {
      icon: <Droplets className="w-8 h-8 text-secondary" />,
      title: '100 bottles of drinking water',
      description: '',
    },
  ];

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          We Provide professional
          <br />
          welfare Services
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
