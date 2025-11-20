import { useState, useMemo } from 'react';
import { Search, ChevronUp, ChevronDown } from 'lucide-react';

 const Plans = () =>  {
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: 'monthly',
    direction: 'asc',
  });

  const plans = [
    { id: 1, category: 'Individual Below 70 Years', description: 'Basic funeral coverage', monthly: 100 },
    { id: 2, category: 'Couples Below 70 Years', description: 'Joint coverage for couples', monthly: 150 },
    { id: 3, category: 'Couples Below 70 Years and children below 18 Years', description: 'Family protection plan', monthly: 200 },
    { id: 4, category: 'Couples, Children and Parents below 70 Years', description: 'Extended family coverage', monthly: 250 },
    { id: 5, category: 'Couples, Children, Parents and inlaws below 70 Years', description: 'Comprehensive family plan', monthly: 300 },
    { id: 6, category: '71-80 Years', description: 'Senior individual coverage', monthly: 350 },
    { id: 7, category: 'Couples, Children and Parents from 71-80 Years', description: 'Senior family plan', monthly: 350 },
    { id: 8, category: 'Couples From 71-80 Years', description: 'Senior couples coverage', monthly: 350 },
    { id: 9, category: 'Couples, Children and Parents from 81-90 Years', description: 'Elderly family protection', monthly: 400 },
    { id: 10, category: '81-90 Years', description: 'Elderly individual plan', monthly: 450 },
    { id: 11, category: 'Individual Below 50 Years', description: 'Young adult coverage', monthly: 80 },
    { id: 12, category: 'Student Plan', description: 'Affordable student coverage', monthly: 50 },
    { id: 13, category: 'Corporate Individual Plan', description: 'Business employee coverage', monthly: 120 },
    { id: 14, category: 'Corporate Family Plan', description: 'Employee family benefits', monthly: 300 },
    { id: 15, category: 'Couples with 1 Child Below 70 Years', description: 'Three-member family plan', monthly: 180 },
    { id: 16, category: 'Single Parent with Children', description: 'Single parent protection', monthly: 220 },
    { id: 17, category: 'Extended Family Plan', description: 'Multi-generational coverage', monthly: 500 },
    { id: 18, category: 'Premium Individual Plan', description: 'Enhanced individual coverage', monthly: 280 },
    { id: 19, category: 'Premium Family Plan', description: 'Enhanced family coverage', monthly: 600 },
    { id: 20, category: 'Over 90 Years Special Plan', description: 'Specialized elderly coverage', monthly: 550 },
  ];

  const filteredPlans = useMemo(() => {
    let filtered = plans.filter(plan =>
      plan.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      plan.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    filtered.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortConfig.direction === 'asc'
          ? aValue - bValue
          : bValue - aValue;
      }

      return 0;
    });

    return filtered;
  }, [searchTerm, sortConfig]);

  const totalPages = Math.ceil(filteredPlans.length / entriesPerPage);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const paginatedPlans = filteredPlans.slice(startIndex, startIndex + entriesPerPage);

  const handleSort = (key) => {
    setSortConfig(prev => ({
      key,
      direction: prev.key === key && prev.direction === 'asc' ? 'desc' : 'asc',
    }));
  };

  const SortIcon = ({ column }) => {
    if (sortConfig.key !== column) {
      return <div className="w-4 h-4" />;
    }
    return sortConfig.direction === 'asc'
      ? <ChevronUp className="w-4 h-4" />
      : <ChevronDown className="w-4 h-4" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-gray-900 mb-12">
          Available Plans
        </h1>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {/* Controls */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center justify-between">

              <div className="flex items-center gap-3">
                <label className="text-sm font-semibold text-gray-700">Show</label>
                <select
                  value={entriesPerPage}
                  onChange={(e) => {
                    setEntriesPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value={5}>5</option>
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={20}>20</option>
                </select>
                <span className="text-sm font-semibold text-gray-700">entries</span>
              </div>

              <div className="w-full sm:w-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search plans..."
                    value={searchTerm}
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th
                    onClick={() => handleSort('category')}
                    className="px-6 py-4 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      Category
                      <SortIcon column="category" />
                    </div>
                  </th>

                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                    Description
                  </th>

                  <th
                    onClick={() => handleSort('monthly')}
                    className="px-6 py-4 text-right text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center justify-end gap-2">
                      Monthly
                      <SortIcon column="monthly" />
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {paginatedPlans.map((plan, index) => (
                  <tr
                    key={plan.id}
                    className={`hover:bg-blue-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {plan.category}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {plan.description}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-blue-600 text-right">
                      {plan.monthly}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="px-6 py-4 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1} to {Math.min(startIndex + entriesPerPage, filteredPlans.length)} of {filteredPlans.length} entries
            </p>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Previous
              </button>

              {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                let pageNum = i + 1;
                if (totalPages > 5 && currentPage > 3) {
                  pageNum = currentPage - 2 + i;
                }
                if (pageNum > totalPages) return null;

                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      currentPage === pageNum
                        ? 'bg-primary text-white'
                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="px-3 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Plans;
