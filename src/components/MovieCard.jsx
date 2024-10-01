/* eslint-disable react/prop-types */

const API_IMAGE = "https://image.tmdb.org/t/p/original";

const MovieCard = ({ movie, selectMovie }) => (
  <div className="bg-white rounded-lg shadow-xl hover:shadow-white duration-2000 cursor-pointer"
    onClick={() => selectMovie(movie)}
  >
    <img src={`${API_IMAGE + movie.poster_path}`} alt={movie.title}className="h-40 w-full object-cover"/>
    <h3 className="p-2 text-center font-bold text-lg">{movie.title}</h3>
  </div>
);

export default MovieCard;
