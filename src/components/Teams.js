const Teams = ({ teams }) => {
  return (
    <div className="overflow-x-auto shadow-lg sm:rounded-lg bg-gray-200 dark:bg-gray-900 p-2">
      <table className="min-w-full text-sm text-left text-gray-800 dark:text-gray-300">
        <thead className="text-xs uppercase bg-gradient-to-r from-blue-800 to-indigo-800 dark:bg-blue-900 dark:text-indigo-300">
          <tr>
            <th className="px-4 py-3 text-left text-white">Nome</th>
          </tr>
        </thead>
        <tbody>
          {teams.map((team, index) => {
            return (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-all duration-200"
              >
                <td className="px-4 py-2 text-left text-gray-800 dark:text-gray-300">
                  <a
                    href={`/${team.slug}/classifications`}
                    className="hover:underline text-blue-500 dark:text-blue-400 no-underline"
                  >
                    {team.name}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Teams;

