import { Plus } from 'lucide-react';

function DependentsStep({ data, onChange, onNext, onPrev }) {
  const addDependent = () => {
    onChange([
      ...data,
      {
        firstName: '',
        middleName: '',
        lastName: '',
        nationalId: '',
        relationship: '',
        dateOfBirth: '',
        mobileNumber: '',
        otherMobileNumber: '',
      },
    ]);
  };

  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Dependents</h2>

        {data.map((dependent, index) => (
          <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {index === 0 ? 'Add Spouse Details' : `Dependent ${index + 1}`}
            </h3>

            {/* Names */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  value={dependent.firstName}
                  onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Middle Name</label>
                <input
                  type="text"
                  value={dependent.middleName}
                  onChange={(e) => handleChange(index, 'middleName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Middle Name"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  value={dependent.lastName}
                  onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Last Name"
                />
              </div>
            </div>

            {/* ID, Relationship, DOB */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">National ID</label>
                <input
                  type="text"
                  value={dependent.nationalId}
                  onChange={(e) => handleChange(index, 'nationalId', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="National ID"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Relationship</label>
                <input
                  type="text"
                  value={dependent.relationship}
                  onChange={(e) => handleChange(index, 'relationship', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Relationship"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={dependent.dateOfBirth}
                  onChange={(e) => handleChange(index, 'dateOfBirth', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Mobile Numbers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">Mobile Number</label>
                <input
                  type="tel"
                  value={dependent.mobileNumber}
                  onChange={(e) => handleChange(index, 'mobileNumber', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="+254..."
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Other Mobile Number</label>
                <input
                  type="tel"
                  value={dependent.otherMobileNumber}
                  onChange={(e) => handleChange(index, 'otherMobileNumber', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="+254..."
                />
              </div>
            </div>
          </div>
        ))}

        {/* Add Dependent Button */}
        <button
          type="button"
          onClick={addDependent}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-secondary rounded-md hover:bg-cyan-600 transition-colors font-medium mb-6"
        >
          <Plus size={20} />
          Add Dependent
        </button>

        {/* Navigation */}
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="px-8 py-2 bg-primary text-secondary rounded-md hover:bg-cyan-600 transition-colors font-medium"
          >
            Prev
          </button>

          <button
            type="submit"
            className="px-8 py-2 bg-primary text-secondary rounded-md hover:bg-cyan-600 transition-colors font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default DependentsStep;
