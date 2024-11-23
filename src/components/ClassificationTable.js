import React from 'react';

const ClassificationTable = ({ teams }) => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg">
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-800 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Posição
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
            <th scope="col" className="px-6 py-3">
              Jogos
            </th>
            <th scope="col" className="px-6 py-3">
              V
            </th>
            <th scope="col" className="px-6 py-3">
              E
            </th>
            <th scope="col" className="px-6 py-3">
              D
            </th>
            <th scope="col" className="px-6 py-3">
              GP
            </th>
            <th scope="col" className="px-6 py-3">
              GC
            </th>
            <th scope="col" className="px-6 py-3">
              SG
            </th>
            <th scope="col" className="px-6 py-3">
              Pontos
            </th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => (
            <tr
              key={team.time}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">{index + 1}</td>
              <td className="px-6 py-4">{team.time}</td>
              <td className="px-6 py-4">{team.jogos}</td>
              <td className="px-6 py-4">{team.v}</td>
              <td className="px-6 py-4">{team.e}</td>
              <td className="px-6 py-4">{team.d}</td>
              <td className="px-6 py-4">{team.gp}</td>
              <td className="px-6 py-4">{team.gc}</td>
              <td className="px-6 py-4">{team.sg}</td>
              <td className="px-6 py-4">{team.pontos}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ClassificationTable;
