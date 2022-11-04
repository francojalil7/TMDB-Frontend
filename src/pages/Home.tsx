import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();
  return <div>Home</div>;
};

export default Home;
