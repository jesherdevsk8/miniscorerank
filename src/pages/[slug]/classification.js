import axios from 'axios';
import { useState } from 'react';
import PlayerStatistics from '../../components/PlayerStatistics';
import TopScorers from '../../components/TopScorers';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export async function getServerSideProps(context) {
  const url = process.env.MINISCORE_BASE_API_URL || 'http://localhost:3000';
  const { slug } = context.params;

  try {
    const { data } = await axios.get(`${url}/api/v1/teams/${slug}/classifications`);
    return {
      props: {
        players: data.data,
        top_scorers: data.top_scorers,
      },
    };
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return {
      props: {
        players: [],
        top_scorers: [],
      },
    };
  }
}

const Home = ({ players, top_scorers }) => {
  const [showTopScorers, setShowTopScorers] = useState(false);

  const toggleTopScorers = () => {
    setShowTopScorers(!showTopScorers);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <h1 className="text-3xl font-bold text-center mb-8 sm:mb-0 tracking-wide">Classificação do Time</h1>
        <button
          onClick={toggleTopScorers}
          className="flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

      {showTopScorers ? <TopScorers scorers={top_scorers} /> : <PlayerStatistics players={players} />}
    </div>
  );
};

export default Home;

