import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      API_OPTIONS
    );
    const response = await data.json();
    console.log(response.results);
    dispatch(addNowPlayingMovies(response.results));
  };
  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}
export default useNowPlayingMovies;
