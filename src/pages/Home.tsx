import { useState } from 'react';
import Navbar from '../components/Navbar';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { useTheme } from '../components/ui/Theme';

interface AmortizationItem {
  month: number;
  principal: string;
  interest: string;
  balance: string;
}

const Home = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [term, setTerm] = useState<number>(5);
  const [monthlyPayment, setMonthlyPayment] = useState<string>('2051.65');
  const [currency, setCurrency] = useState<string>('USD');
  const [amortizationSchedule, setAmortizationSchedule] = useState<AmortizationItem[]>([
    { month: 1, principal: '1343.32', interest: '708.33', balance: '98656.68' },
    { month: 2, principal: '1352.83', interest: '698.82', balance: '97303.85' },
    { month: 3, principal: '1362.41', interest: '689.24', balance: '95941.44' },
  ]);

  const { isDark } = useTheme(); 

  const calculateLoan = () => {
    const monthlyRate = interestRate / 100 / 12;
    const payments = term * 12;
    const x = Math.pow(1 + monthlyRate, payments);
    const monthly = (loanAmount * x * monthlyRate) / (x - 1);

    if (isFinite(monthly)) {
      setMonthlyPayment(monthly.toFixed(2));
      generateAmortizationSchedule(loanAmount, monthlyRate, monthly, payments);
    } else {
      setMonthlyPayment('0');
      setAmortizationSchedule([]);
    }
  };

  const generateAmortizationSchedule = (
    principal: number,
    monthlyRate: number,
    monthlyPayment: number,
    payments: number
  ) => {
    let balance = principal;
    const schedule: AmortizationItem[] = [];

    for (let month = 1; month <= payments ; month++) {
      const interest = balance * monthlyRate;
      const principalPayment = monthlyPayment - interest;
      balance -= principalPayment;

      schedule.push({
        month,
        principal: principalPayment.toFixed(2),
        interest: interest.toFixed(2),
        balance: Math.abs(balance).toFixed(2),
      });
    }

    setAmortizationSchedule(schedule);
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    calculateLoan();
  };

  const handleReset = () => {
    setLoanAmount(100000);
    setInterestRate(8.5);
    setTerm(5);
    setMonthlyPayment('');
    setCurrency('USD');
    setAmortizationSchedule([]);
  };

  return (
    <div className={`h-screen overflow-auto w-full ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <Navbar />

      <div className={`container mx-auto p-4 md:p-6 w-full  flex justify-center overflow-hidden`}>
        <div className="flex flex-col lg:flex-row gap-6 w-full  justify-center">

          {/*  Calculator  Calculator Calculator*/}
          <div className={`w-full h-full ${isDark ? 'bg-gray-700' : 'bg-white'} rounded shadow p-5 sm:p-10 `}>
            <h2 className={`text-lg font-bold border-b pb-2 mb-6 sm:text-2xl ${isDark ? 'text-white' : 'text-black'}`}>Loan Calculator Dashboard</h2>

            <form onSubmit={handleSubmit} className="space-y-6 mb-6">
              <div className="grid grid-cols-3 md:grid-cols-3 gap-4">
                <div >
                  <label className={`block mb-1 text-sm font-medium ${isDark ? 'text-white' : 'text-black'}`}>Loan Amount</label>
                  <input
                    type="number"
                    className={`w-full border p-3 rounded ${isDark ? 'bg-gray-600 text-white' : 'bg-white text-black'} border-gray-400 hover:border-2 hover:border-blue-600`}
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(parseFloat(e.target.value))}
                  />
                </div>
                <div>
                  <label className={`block mb-1 font-medium text-sm ${isDark ? 'text-white' : 'text-black'}`}>Interest Rate (%)</label>
                  <input
                    type="number"
                    className={`w-full border-1 p-3 rounded ${isDark ? 'bg-gray-600 text-white' : 'bg-white text-black'} border-gray-400 hover:border-2 hover:border-blue-600`}
                    value={interestRate}
                    onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                    step="0.1"
                  />
                </div>
                <div>
                  <label className={`block mb-1 font-medium text-sm ${isDark ? 'text-white' : 'text-black'}`}>Term (Years)</label>
                  <input
                    type="number"
                    className={`w-full border p-3 rounded ${isDark ? 'bg-gray-600 text-white' : 'bg-white text-black'} border-gray-400 hover:border-2 hover:border-blue-600`}
                    value={term}
                    onChange={(e) => setTerm(parseInt(e.target.value))}
                  />
                </div>
              </div>

              <button type="submit" className={`w-full ${isDark ? 'bg-blue-500' : 'bg-blue-600'} text-white py-2 rounded hover:bg-blue-700`}>
                Calculate
              </button>
            </form>

            {/* Results */}
            {monthlyPayment && (
              <div className={`bg-gray-50 p-4 rounded mb-6 flex justify-between flex-wrap items-center ${isDark ? 'bg-gray-800' : 'bg-gray-100'}`}>
                <div className="text-lg font-medium">
                  Monthly EMI: <span className="text-blue-600 text-xl">{monthlyPayment} {currency}</span>
                  <div className="mt-2 md:mt-0">
                    <label className="mr-2 font-medium">Currency:</label>
                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className={`border rounded px-2 py-1 text-sm ${isDark ? 'bg-gray-600 text-white' : 'bg-white text-black'}`}
                    >
                      <option value="USD">USD</option>
                      <option value="EUR">EUR</option>
                      <option value="GBP">GBP</option>
                      <option value="JPY">JPY</option>
                    </select>
                  </div>
                </div>
                <div>
                  <button
                    className='border-1 px-2 py-1 text-red-600 rounded hover:border-2'
                    onClick={handleReset}
                  >
                    Reset
                  </button>
                </div>
              </div>
            )}

            {/* Table Table Table Table Table */}
            {amortizationSchedule.length > 0 && (
              <div className="mt-6">
                <h3 className={`text-lg font-semibold mb-4 ${isDark ? 'text-white' : 'text-black'}`}>
                  Amortization Schedule <span className="text-black font-bold text-lg">({currency})</span>
                </h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Month</TableHead>
                      <TableHead>Principal</TableHead>
                      <TableHead>Interest</TableHead>
                      <TableHead>Balance</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {amortizationSchedule.map((item) => (
                      <TableRow key={item.month}>
                        <TableCell>{item.month}</TableCell>
                        <TableCell>{item.principal}</TableCell>
                        <TableCell>{item.interest}</TableCell>
                        <TableCell>{item.balance}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
