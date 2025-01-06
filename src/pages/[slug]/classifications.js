import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerStatistics from '../../components/PlayerStatistics';
import TopScorers from '../../components/TopScorers';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export async function getServerSideProps(context) {
  const url = process.env.MINISCORE_BASE_API_URL || 'http://localhost:3000';
  const { slug } = context.params;

  try {
    const { year = new Date().getFullYear() } = context.query;
    const { data } = await axios.get(`${url}/api/v1/teams/${slug}/classifications?year=${year}`);
    return {
      props: {
        players: data.data,
        top_scorers: data.top_scorers,
        slug: slug,
        initialYear: year,
      },
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return {
      props: {
        players: [],
        top_scorers: [],
        slug: '',
        initialYear: new Date().getFullYear(),
      },
    };
  }
}

const Home = ({ players, top_scorers, slug, initialYear }) => {
  const [showTopScorers, setShowTopScorers] = useState(false);
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

  const handleYearChange = (e) => {
    setYear(e.target.value);
    window.location.href = `${window.location.origin}/${slug}/classifications/?year=${e.target.value}`;
  };

  return (
    <div className="container mx-auto px-2 py-4 sm:px-2">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 sm:mb-0 tracking-wide">Classificação do Time</h1>
        <div className="flex items-center justify-center sm:justify-end mb-2 sm:mb-0">
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
              className="w-24 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:focus:border-blue-500"
            >
              {/* TODO: Pegar em uma api do backend que tras todos anos existentes no bancdo  */}
              {Array.from({ length: 5 }).map((_, i) => (
                <option key={i + 1} value={new Date().getFullYear() - i}>
                  {new Date().getFullYear() - i}
                </option>
              ))}
            </select>
            <FiChevronDown className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 dark:text-gray-300" />
          </div>
        </div>

        <div className="mt-4 sm:mt-0 flex items-center justify-start sm:justify-start ml-2 sm:ml-0">
          <button
            onClick={toggleTopScorers}
            className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 dark:bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
      </div>

      {showTopScorers ? <TopScorers scorers={top_scorers} /> : <PlayerStatistics players={players} />}
    </div>
  );
};

export default Home;