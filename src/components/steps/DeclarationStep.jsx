function DeclarationStep({ data, onChange, onPrev, onSubmit }) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Declaration</h2>

        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Go To Mpesa</li>
          <li>Go To Lipa Na Mpesa</li>
          <li>Paybill</li>
          <li>Business Number: 4123313</li>
          <li>Account No: your national ID</li>
          <li>Amount: ksh 200</li>
          <li>Enter mpesa code below and click submit</li>
        </ul>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mpesa Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={data.mpesaCode}
              onChange={(e) => handleChange('mpesaCode', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Mpesa Code"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Referred By
            </label>
            <input
              type="text"
              value={data.referredBy}
              onChange={(e) => handleChange('referredBy', e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              placeholder="Member Number"
            />
          </div>
        </div>

        <div className="mb-6">
          <p className="text-gray-700 text-sm mb-3">
            I hereby declare that the information I have provided is true and accurate to the best of my knowledge.
          </p>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              checked={data.agreed}
              onChange={(e) => handleChange('agreed', e.target.checked)}
              className="w-4 h-4 text-cyan-500 border-gray-300 rounded focus:ring-cyan-500"
              required
            />
            <label htmlFor="agree" className="ml-2 text-sm text-gray-700">
              I agree
            </label>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onPrev}
            className="px-8 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors font-medium"
          >
            Prev
          </button>

          <button
            type="submit"
            className="px-8 py-2 bg-primary text-secondary rounded-md hover:bg-emerald-600 transition-colors font-medium"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default DeclarationStep;
