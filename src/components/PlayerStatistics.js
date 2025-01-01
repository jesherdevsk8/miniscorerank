const PlayerStatistics = ({ players }) => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-white dark:bg-gray-900 p-2">
      <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-800 to-indigo-800 dark:bg-gray-900 dark:text-gray-300">
          <tr>
            <th scope="col" className="px-4 py-3 text-left text-white">
              Jogador
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              J
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              %
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              V
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              E
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              D
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              GM
            </th>
            <th scope="col" className="px-4 py-3 text-center text-white">
              SG
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr
              key={player.id || index}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
            >
              <td className="px-2 py-1 font-semibold text-left text-white dark:text-white text-xs sm:px-4 sm:py-2 sm:text-sm">{index + 1} &nbsp; {player.name}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.total_matches}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.performance_percentage}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.victories}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.draws}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.defeats}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.total_goals}</td>
              <td className="px-4 py-2 text-center text-white">{player.statistics.average_goals_per_match}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatistics;
