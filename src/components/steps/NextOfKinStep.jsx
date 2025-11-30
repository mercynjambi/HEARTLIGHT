// import { NextOfKin } from '../RegistrationForm';

function NextOfKinStep({ data, onChange, onNext, onPrev }) {
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
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Next of Kin</h2>

        {data.map((kin, index) => (
          <div key={index} className="mb-8 pb-8 border-b border-gray-200 last:border-b-0">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
              {index === 0 ? 'First Next of Kin' : 'Second Next of Kin'}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">First Name</label>
                <input
                  type="text"
                  value={kin.firstName}
                  onChange={(e) => handleChange(index, 'firstName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="First Name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Middle Name</label>
                <input
                  type="text"
                  value={kin.middleName}
                  onChange={(e) => handleChange(index, 'middleName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Middle Name"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Last Name</label>
                <input
                  type="text"
                  value={kin.lastName}
                  onChange={(e) => handleChange(index, 'lastName', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">National ID</label>
                <input
                  type="text"
                  value={kin.nationalId}
                  onChange={(e) => handleChange(index, 'nationalId', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="National ID"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Phone Number</label>
                <input
                  type="tel"
                  value={kin.phoneNumber}
                  onChange={(e) => handleChange(index, 'phoneNumber', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="+254..."
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-2">Relationship</label>
                <input
                  type="text"
                  value={kin.relationship}
                  onChange={(e) => handleChange(index, 'relationship', e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Relationship"
                />
              </div>
            </div>
          </div>
        ))}

        <div className="flex justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={onPrev}
            className="px-8 py-2 bg-primary text-secondary rounded-md hover:bg-primary transition-colors font-medium"
          >
            Prev
          </button>

          <button
            type="submit"
            className="px-8 py-2  bg-primary text-secondary rounded-md hover:bg-primary transition-colors font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default NextOfKinStep;
