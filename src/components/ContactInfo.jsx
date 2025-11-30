const ContactInfo = ({ details }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-5">
        Contact Information
      </h2>

      <div className="space-y-4">
        {details.map((detail, index) => {
          const Icon = detail.icon;

          return (
            <a
              key={index}
              href={detail.href}
              className="flex items-center gap-3 group cursor-pointer"
            >
              <div
                className="flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center transition-colors duration-300"
                style={{ backgroundColor: '#566E6D' }}
              >
                <Icon className="w-5 h-5  bg-primary text-secondary" />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                  {detail.label}
                </p>
                <p
                  className="text-base font-medium text-gray-900 break-words transition-colors duration-300"
                  style={{ color: '#566E6D' }}
                >
                  {detail.value}
                </p>
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-gray-600 text-sm leading-relaxed">
          We're available Monday through Friday, 9:00 AM to 6:00 PM.
          We'll do our best to respond to your inquiry within 24 hours.
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
