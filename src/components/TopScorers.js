  const TopScorers = ({ scorers }) => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-white dark:bg-gray-900 p-2">
      <table className="min-w-full text-sm text-left text-gray-600 dark:text-gray-700">
        <thead className="text-xs text-gray-700 uppercase bg-gradient-to-r from-blue-800 to-indigo-800 dark:bg-gray-900 dark:text-gray-300">
          <tr>
            <th className="px-4 py-3 text-left text-white">Jogador</th>
            <th className="px-4 py-3 text-right text-white">Gols</th>
          </tr>
        </thead>
        <tbody>
          {scorers.map((scorer, index) => (
            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200">
              <td className="px-4 py-2 text-left text-white sm:pl-6">{index + 1} &nbsp; {scorer.name}</td>
              <td className="px-4 py-2 text-right text-white">{scorer.goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopScorers;
