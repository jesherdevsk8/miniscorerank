import fs from 'fs';
import path from 'path';
import { useState } from 'react';
import PlayerStatistics from '../components/PlayerStatistics';
import TopScorers from '../components/TopScorers';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export async function getServerSideProps() {
  // const response = await fetch('../utils/__mocks__/classification.json');
  // const data = await response.json();
  // const players = data.data;
  const filePath = path.join(process.cwd(), 'src', 'utils', '__mocks__', 'classification.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const players = JSON.parse(fileData).data;
  const top_scorers = JSON.parse(fileData).top_scorers;

  return {
    props: {
      players,
      top_scorers,
    },
  };
}

const Home = ({ players, top_scorers }) => {
  const [showTopScorers, setShowTopScorers] = useState(false);

  const toggleTopScorers = () => {
    setShowTopScorers(!showTopScorers);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between mb-8">
        <h1 className="text-3xl font-semibold text-center sm:text-left mb-4 sm:mb-0">Classificação do Time</h1>
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
