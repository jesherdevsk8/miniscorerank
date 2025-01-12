import LastFiveParticipations from './LastFiveParticipations';

const PlayerStatistics = ({ players }) => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-gray-200 dark:bg-gray-900 p-2">
      <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gradient-to-r from-blue-800 to-indigo-800 dark:from-blue-700 dark:to-indigo-800 dark:text-gray-300">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-white">
              Jogador
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              J
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              %
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              V
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              E
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              D
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              GM
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              MG
            </th>
            <th scope="col" className="px-2 sm:px-4 py-2 text-center text-white">
              Últimas 5
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => {
            return (
              <tr
                key={player.id || index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <td className="px-2 py-2 font-semibold text-left text-gray-800 dark:text-gray-300">
                  {index + 1} &nbsp; {player.name}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.total_matches}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.performance_percentage}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.victories}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.draws}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.defeats}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.total_goals}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300">
                  {player.statistics.average_goals_per_match}
                </td>
                <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300 flex items-center justify-center">
                  <LastFiveParticipations 
                    last_five_participations={player.statistics.last_five_participations} 
                    className="flex items-center justify-center w-full"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatistics;

