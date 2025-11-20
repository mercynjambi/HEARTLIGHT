const  ContactInfo = ({ details }) =>  {
  return (
    <div className="flex flex-col justify-start bg-white rounded-2xl shadow-lg p-4 sm:p-6">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
        Contact Information
      </h2>

      <div className="space-y-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <a
              key={index}
              href={detail.href}
              className="flex items-start gap-4 group cursor-pointer"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                <Icon className="w-6 h-6 text-secondary group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-600 mb-1">
                  {detail.label}
                </p>
                <p className="text-base sm:text-lg font-medium text-gray-900 break-words group-hover:text-blue-600 transition-colors duration-300">
                  {detail.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-gray-600 text-sm leading-relaxed">
          We're available Monday through Friday, 9:00 AM to 6:00 PM. We'll do our best to respond to your inquiry within 24 hours.
        </p>
      </div>
    </div>
  );
}

export default ContactInfo;
