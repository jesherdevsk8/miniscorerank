import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerStatistics from '../../components/PlayerStatistics';
import TopScorers from '../../components/TopScorers';
import LeastConcededGoalkeepers from '../../components/LeastConcededGoalkeepers';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export async function getServerSideProps(context) {
  const url = process.env.MINISCORE_BASE_API_URL || 'http://localhost:3000';
  const { slug } = context.params;

  try {
    const { year = new Date().getFullYear() } = context.query;
    const { data } = await axios.get(`${url}/api/v1/teams/${slug}/classifications?year=${year}`);
    return {
      props: {
        players: data.data || [],
        top_scorers: data.top_scorers || [],
        least_conceded_goalkeepers: data.least_conceded_goalkeepers || [],
        slug,
        initialYear: year,
      },
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return {
      props: {
        players: [],
        top_scorers: [],
        least_conceded_goalkeepers: [],
        slug: '',
        initialYear: new Date().getFullYear(),
      },
    };
  }
}

const Home = ({ players, top_scorers, least_conceded_goalkeepers, slug, initialYear }) => {
  const [showTopScorers, setShowTopScorers] = useState(false);
  const [showGoalkeepers, setShowGoalkeepers] = useState(false);
  const [year, setYear] = useState(initialYear);

  // Atualiza o ano no cliente
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearFromQuery = searchParams.get('year');
    if (yearFromQuery) {
      setYear(yearFromQuery);
    }
  }, []);

  const toggleTopScorers = () => {
    setShowTopScorers(!showTopScorers);
  };

  const toggleGoalkeepers = () => {
    setShowGoalkeepers(!showGoalkeepers);
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
    window.location.href = `${window.location.origin}/${slug}/classifications/?year=${e.target.value}`;
  };

  return (
    <div className="container mx-auto px-2 py-4 sm:px-2">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 sm:mb-0 tracking-wide">Classificação do Time</h1>
        <div className="flex justify-center items-center">
          <label
            htmlFor="year"
            className="mr-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Filtrar por ano:
          </label>
          <div className="relative">
            <select
              id="year"
              value={year}
              onChange={handleYearChange}
              className="w-24 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:focus:border-indigo-500"
            >
              {Array.from({ length: 5 }).map((_, i) => (
                <option key={i} value={new Date().getFullYear() - i}>
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <FiChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-500" />
            </div>
          </div>
        </div>
      </div>

      <nav className="flex items-center justify-between w-full overflow-x-auto shadow-lg sm:rounded-lg bg-gray-100 dark:bg-gray-800 p-2">
        <div className="flex items-center justify-start space-x-4">
          <button
            onClick={toggleTopScorers}
            className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-indigo-800 dark:from-blue-700 dark:to-indigo-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-600 dark:focus:ring-blue-800"
          >
            {showTopScorers ? (
              <>
                <FiChevronUp className="mr-2" />
                Ver Classificação
              </>
            ) : (
              <>
                <FiChevronDown className="mr-2" />
                Ver Artilheiros
              </>
            )}
          </button>
          <button
            onClick={toggleGoalkeepers}
            className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-800 to-indigo-800 dark:from-blue-700 dark:to-indigo-800 dark:text-gray-300 hover:bg-gradient-to-r hover:from-blue-700 hover:to-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:hover:bg-gradient-to-r dark:hover:from-blue-600 dark:hover:to-indigo-600 dark:focus:ring-blue-800"
          >
            {showGoalkeepers ? (
              <>
                <FiChevronUp className="mr-2" />
                Goleiros
              </>
            ) : (
              <>
                <FiChevronDown className="mr-2" />
                Goleiros
              </>
            )}
          </button>
        </div>
      </nav>

      {showTopScorers ? (
        <TopScorers scorers={top_scorers} />
      ) : (
        <PlayerStatistics players={players} />
      )}

      {showGoalkeepers && (
        <LeastConcededGoalkeepers goals={least_conceded_goalkeepers} />
      )}
    </div>
  );
};

export default Home;
