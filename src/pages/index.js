import axios from 'axios';
import Teams from '../components/Teams';

export async function getServerSideProps() {
  const url = process.env.MINISCORE_BASE_API_URL || 'http://localhost:3000';
  try {
    const { data } = await axios.get(url + '/api/v1/teams');
    return {
      props: {
        teams: data.data,
      }
    }
  } catch (error) {
    console.error("Error fetching data from the API:", error);
    return {
      props: {
        teams: [],
      },
    };
  }
}
const Home = ({ teams }) => {

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-center mb-8">
        <h1 className="text-4xl font-bold text-center mb-8 sm:mb-0 tracking-wide">Escolha seu time</h1>
      </div>

      {<Teams teams={teams} />}
    </div>
  );
};

export default Home;

