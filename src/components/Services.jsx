import ServiceCard from './ServiceCard';
import { FileText, Shirt, Ambulance, Tent, Droplets } from 'lucide-react';

function Services() {
  const services = [
    // {
    //   icon: <div className=" text-secondary text-3xl">👑</div>,
    //   title: 'Provision of executive coffin',
    //   description: 'Purchasing the coffin',
    // },
    // {
    //   icon: <Shirt className="w-8 h-8 text-secondary" />,
    //   title: 'Dressing the body',
    //   description: 'clothings',
    // },
    {
      icon: <FileText className="w-8 h-8 text-secondary" />,
      title: 'Payment of mortuary bill',
      description: 'For a maximum of 14 days',
    },
    // {
    //   icon: <Ambulance className="w-8 h-8 text-secondary" />,
    //   title: 'Transportation of the body',
    //   description: '',
    // },
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
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
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
