import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';

type Props = {
  emi?: number;
};

type Rates = Record<string, number>;

const ITEMS_PER_PAGE = 10;

const Exchange = ({ emi }: Props) => {
  const [rates, setRates] = useState<Rates>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = Math.ceil(Object.keys(rates).length / ITEMS_PER_PAGE);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const apiKey = import.meta.env.VITE_EXCHANGE_RATE_API_KEY;
        const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
        const data = await res.json();

        if (data.result === 'success') {
          setRates(data.conversion_rates);
        } else {
          setError('Failed to fetch exchange rates');
        }
      } catch (err) {
        console.error(err);
        setError('Error fetching exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchRates();
  }, []);

  const paginatedRates = Object.entries(rates).slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div >

<Navbar />

    <div className="bg-white dark:bg-gray-800 rounded shadow p-6   h-screen">
      <h2 className="text-lg font-semibold border-b pb-2 mb-4 text-gray-800 dark:text-gray-200 ">
        Live Exchange Rates (USD)
      </h2>

      {loading ? (
        <p className="text-sm text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500 text-sm">{error}</p>
      ) : (
        <>
          <div className="space-y-2">
            {paginatedRates.map(([currency, rate]) => (
              <div
                key={currency}
                className="flex justify-between text-gray-700 dark:text-gray-100"
              >
                <span>USD/{currency}</span>
                <span className="text-blue-600 font-medium">
                  {rate} {emi && ` | ${emi * rate} (${currency})`}
                </span>
              </div>
            ))}
          </div>


          <div className="flex justify-between items-center mt-6">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="text-gray-700 dark:text-gray-200 text-sm">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-sm rounded hover:bg-gray-300 dark:hover:bg-gray-600 disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>.
    </div>
  );
};

export default Exchange;
