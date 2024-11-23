import ClassificationTable from "../components/ClassificationTable";

const Home = () => {
  const teams = [
    {
      time: "Time A",
      jogos: 10,
      v: 8,
      e: 1,
      d: 1,
      gp: 25,
      gc: 10,
      sg: 15,
      pontos: 25,
    },
    {
      time: "Time B",
      jogos: 10,
      v: 7,
      e: 2,
      d: 1,
      gp: 22,
      gc: 12,
      sg: 10,
      pontos: 23,
    },
    {
      time: "Time C",
      jogos: 10,
      v: 6,
      e: 2,
      d: 2,
      gp: 18,
      gc: 15,
      sg: 3,
      pontos: 20,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold text-center mb-8">Classificação do Campeonato</h1>
      <ClassificationTable teams={teams} />
    </div>
  );
};

export default Home;
