import Slider from "../components/Slider";
import useMovies from "../hooks/useMovies";

const Home = () => {
  const { movies } = useMovies();
  console.log("🚀 ~ file: Home.tsx ~ line 5 ~ Home ~ movies", movies);

  return <Slider movies={movies}/>;
};

export default Home;
