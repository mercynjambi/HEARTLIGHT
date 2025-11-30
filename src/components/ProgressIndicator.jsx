function ProgressIndicator({ steps, currentStep }) {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                step.number === currentStep
                  ? 'bg-primary text-white'
                  : step.number < currentStep
                  ? 'bg-cyan-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {step.number}
            </div>
            <span
              className={`text-xs mt-2 font-medium ${
                step.number === currentStep
                  ? 'text-cyan-500'
                  : step.number < currentStep
                  ? 'text-cyan-500'
                  : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
          </div>

          {index < steps.length - 1 && (
            <div
              className={`w-24 h-0.5 mb-6 mx-2 transition-colors ${
                step.number < currentStep ? 'bg-cyan-500' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default ProgressIndicator;
