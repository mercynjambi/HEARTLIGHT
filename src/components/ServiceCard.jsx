function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-lg flex items-center justify-center">
          {icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
          {description && (
            <p className="text-gray-600 text-sm">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
