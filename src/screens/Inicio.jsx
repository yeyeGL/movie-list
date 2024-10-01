import  { useState, useEffect } from "react";
import axios from "axios";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MoviePlayer from "../components/MoviePlayer";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "3360f605aa10d556eda2648188fe8d5a";

const Inicio = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");
  const [movie, setMovie] = useState({ title: "Cargando" });
  const [trailer, setTrailer] = useState(null);
  const [playing, setPlaying] = useState(false);

  const fetchMovies = async (searchKey) => {
    const type = searchKey ? "search" : "discover";
    const {
      data: { results },
    } = await axios.get(`${API_URL}/${type}/movie`, {
      params: { api_key: API_KEY, query: searchKey },
    });
    setMovies(results);
    setMovie(results[0]);

    if (results.length) {
      await fetchOneMovie(results[0].id);
    }
  };

  const fetchOneMovie = async (id) => {
    const { data } = await axios.get(`${API_URL}/movie/${id}`, {
      params: { api_key: API_KEY, append_to_response: "videos" },
    });
    if (data.videos && data.videos.results) {
      const trailer = data.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : data.videos.results[0]);
    }
    setMovie(data);
  };

  const selectMovie = async (movie) => {
    fetchOneMovie(movie.id);
    setMovie(movie);
    window.scrollTo(0, 0);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    fetchMovies(searchKey);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="p-6 bg-slate-800">
      <SearchBar
        searchKey={searchKey}
        setSearchKey={setSearchKey}
        searchMovie={searchMovie}
      />
      <MoviePlayer movie={movie} trailer={trailer} playing={playing} setPlaying={setPlaying} />

      <div className="space-x-4">
        <button
          onClick={() => setPlaying(false)}
          className="bg-red-700 text-white p-2 rounded-lg hover:bg-red-950 duration-2000 hover:shadow-red-500 shadow-xl"
        >
          Cerrar
        </button>
        {trailer ? (
          <button
            className="bg-blue-700 text-white p-2 rounded-lg hover:bg-blue-950 duration-2000 hover:shadow-blue-500 shadow-xl"
            onClick={() => setPlaying(true)}
          >
            Ver trailer
          </button>
        ) : (
          <span className="text-white">
            Trailer no está disponible, seleccione otra película
          </span>
        )}
      </div>

      <h1 className="text-3xl font-extrabold mb-8 text-center text-white">
        Películas
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} selectMovie={selectMovie} />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
