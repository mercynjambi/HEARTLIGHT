const  MemberInfoStep = ({ data, onChange, onNext })  => {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <p className="text-red-500 text-sm mb-4">Please fill all the required fields</p>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Member Info</h2>

        {/* Names */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.firstName}
              onChange={(e) => handleChange("firstName", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="First Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Middle Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.middleName}
              onChange={(e) => handleChange("middleName", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Middle Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Last Name
            </label>
            <input
              type="text"
              value={data.lastName}
              onChange={(e) => handleChange("lastName", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Last Name"
            />
          </div>
        </div>

        {/* ID + Village */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              National ID <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.nationalId}
              onChange={(e) => handleChange("nationalId", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="25"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Village
            </label>
            <input
              type="text"
              value={data.village}
              onChange={(e) => handleChange("village", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="MK"
            />
          </div>
        </div>

        {/* Country + Gender */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select county <span className="text-red-500">*</span>
            </label>
            <select
              value={data.country}
              onChange={(e) => handleChange("country", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Tharaka Nithi</option>
              <option value="kenya">Kiambu</option>
              <option value="uganda">Murang'a</option>
              <option value="tanzania">Kisumu</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select gender <span className="text-red-500">*</span>
            </label>
            <select
              value={data.gender}
              onChange={(e) => handleChange("gender", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Female</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>

        {/* Category */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select category <span className="text-red-500">*</span>
          </label>
          <select
            value={data.category}
            onChange={(e) => handleChange("category", e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
            required
          >
            <option value="">
              Couples, Children and Parents (91–100 Yrs) – KES 500
            </option>
            <option value="category1">
              Couples, Children and Parents (91–100 Yrs) – KES 500
            </option>
            <option value="category2">
              Individual (21–50 Yrs) – KES 300
            </option>
            <option value="category3">
              Senior Citizens (51–90 Yrs) – KES 400
            </option>
          </select>
        </div>

        {/* Marital status + DOB */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select marital status <span className="text-red-500">*</span>
            </label>
            <select
              value={data.maritalStatus}
              onChange={(e) => handleChange("maritalStatus", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent bg-white"
              required
            >
              <option value="">Single</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={data.dateOfBirth}
              onChange={(e) => handleChange("dateOfBirth", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Phone numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              value={data.mobileNumber}
              onChange={(e) => handleChange("mobileNumber", e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="+254792748289"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Other Mobile Number
            </label>
            <input
              type="tel"
              value={data.otherMobileNumber}
              onChange={(e) =>
                handleChange("otherMobileNumber", e.target.value)
              }
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="78"
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-8 py-2 bg-primary text-secondary rounded-md hover:bg-primary transition-colors font-medium"
          >
            Next
          </button>
        </div>
      </div>
    </form>
  );
}

export default MemberInfoStep;
