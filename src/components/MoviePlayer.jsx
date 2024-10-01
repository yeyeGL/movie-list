/* eslint-disable react/prop-types */

import YouTube from "react-youtube";

const API_IMAGE = "https://image.tmdb.org/t/p/original";

const MoviePlayer = ({ movie, trailer, playing }) => (
  <div>
    {playing ? (<YouTube videoId={trailer.key} containerClassName={"youtube-container amru"}
        opts={{ width: "100%", height: 400 }}
      />
    ) : (
      <div
        className="p-4 shadow-xl shadow-red-500 duration-3000 mb-3 rounded-xl"
        style={{
          backgroundImage: `url("${API_IMAGE}${movie.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="h-64 text-center flex flex-col justify-center items-center bg-black bg-opacity-50 rounded-xl">
          <h1 className="text-red-600 font-extrabold text-4xl">{movie.title}</h1>
          <p className="text-white text-2xl">{movie.overview}</p>
        </div>
      </div>
    )}
  </div>
);

export default MoviePlayer;
