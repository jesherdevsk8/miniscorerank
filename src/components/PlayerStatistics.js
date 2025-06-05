import { useState, useMemo } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import LastFiveParticipations from './LastFiveParticipations';

const PlayerStatistics = ({ players }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'desc' });

  const getSortIcon = (key) => {
    if (sortConfig.key !== key) return <FaSort className="inline ml-1" />;
    return sortConfig.direction === 'asc'
      ? <FaSortUp className="inline ml-1" />
      : <FaSortDown className="inline ml-1" />;
  };

  const getValue = (player, key) => {
    switch (key) {
      case 'name':
        return player.name.toLowerCase();
      case 'total_matches':
        return player.statistics.total_matches;
      case 'performance_percentage':
        return player.statistics.performance_percentage;
      case 'victories':
        return player.statistics.victories;
      case 'draws':
        return player.statistics.draws;
      case 'defeats':
        return player.statistics.defeats;
      default:
        return '';
    }
  };

  const sortedPlayers = useMemo(() => {
    if (!sortConfig.key) return players;

    return [...players].sort((a, b) => {
      const aValue = getValue(a, sortConfig.key);
      const bValue = getValue(b, sortConfig.key);

      if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [players, sortConfig]);

  const onSort = (key) => {
    let direction = 'desc';
    if (sortConfig.key === key && sortConfig.direction === 'desc') {
      direction = 'asc';
    }
    setSortConfig({ key, direction });
  };

  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-gray-200 dark:bg-gray-900 p-2">
      <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gradient-to-r from-blue-800 to-indigo-800 dark:from-blue-700 dark:to-indigo-800 dark:text-gray-300">
          <tr>
            <th onClick={() => onSort('name')} className="px-4 py-3 text-left text-white cursor-pointer select-none">
              {getSortIcon('name')} Jogador
            </th>
            <th onClick={() => onSort('total_matches')} className="px-2 sm:px-4 py-2 text-center text-white cursor-pointer select-none">
              {getSortIcon('total_matches')} J
            </th>
            <th onClick={() => onSort('performance_percentage')} className="px-2 sm:px-4 py-2 text-center text-white cursor-pointer select-none">
              {getSortIcon('performance_percentage')} %
            </th>
            <th onClick={() => onSort('victories')} className="px-2 sm:px-4 py-2 text-center text-white cursor-pointer select-none">
              {getSortIcon('victories')} V
            </th>
            <th onClick={() => onSort('draws')} className="px-2 sm:px-4 py-2 text-center text-white cursor-pointer select-none">
              {getSortIcon('draws')} E
            </th>
            <th onClick={() => onSort('defeats')} className="px-2 sm:px-4 py-2 text-center text-white cursor-pointer select-none">
              {getSortIcon('defeats')} D
            </th>
            <th className="px-2 sm:px-4 py-2 text-center text-white">
              Últimas 5
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
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
              <td className="px-2 sm:px-4 py-1 sm:py-2 text-center text-gray-800 dark:text-gray-300 flex items-center justify-center">
                <LastFiveParticipations
                  last_five_participations={player.statistics.last_five_participations}
                  className="flex items-center justify-center w-full"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PlayerStatistics;
