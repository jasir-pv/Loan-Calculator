
import { useTheme } from '../components/ui/Theme';
import Navbar from '../components/Navbar';



const About = () => {

      const { isDark } = useTheme(); 


  return (
    <div>

    <Navbar />

    <div className={`w-full  px-4 py-10 text-gray-800 ${isDark ? 'text-white bg-gray-800' : 'text-black'}`}>

    <h1 className="text-4xl font-bold mb-4">About This App</h1>

    {/* App Description */}
    <p className="text-lg mb-6">
      The <strong>Loan Calculator App</strong> is a responsive, single-page web application built using React and Tailwind CSS.
      It enables users to calculate their monthly loan EMIs (Equated Monthly Installments), view a detailed amortization schedule,
      and convert their EMI into multiple currencies using real-time exchange rates.
    </p>

    {/* Core Features */}
    <h2 className="text-2xl font-semibold mb-4 mt-8">🧩 Core Features</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Calculate EMIs using standard financial formulas.</li>
      <li>View an interactive amortization schedule with monthly breakdown.</li>
      <li>Live currency conversion using ExchangeRate API.</li>
      <li>Dark/Light mode toggle for better user experience.</li>
      <li>Fully responsive and mobile-friendly design.</li>
    </ul>

    {/* Technical Highlights */}
    <h2 className="text-2xl font-semibold mb-4 mt-10">⚙️ Technical Highlights</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Built with <strong>React</strong> and <strong>TypeScript</strong>.</li>
      <li>Styled using <strong>Tailwind CSS</strong> for rapid and consistent design.</li>
      <li>State managed using React Context API.</li>
      <li>API integration for live exchange rates.</li>
      <li>Error boundaries and 404 fallback pages for better UX.</li>
    </ul>

    {/* Deployment Info */}
    <h2 className="text-2xl font-semibold mb-4 mt-10">🚀 Deployment</h2>
    <p className="text-md mb-2">
      The app is fully deployed and accessible via a public link. The GitHub repository includes:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Modular and readable code structure.</li>
      <li>Live demo link in the repository About section.</li>
      <a
      className='text-lg font-semibold text-blue-700 ' 
      href='https://github.com/jasir-pv/Loan-Calculator.git'>Git hub link clik me</a>
    </ul>
  </div>
  </div>
  )
}

export default About