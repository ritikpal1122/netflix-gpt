import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTopRateMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRateMovies  = () => {
    const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log(response.results);
    dispatch(addTopRateMovies(response.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
}
export default useTopRateMovies;
