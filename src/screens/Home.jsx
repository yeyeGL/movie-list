// import { useState, useEffect } from "react";

// const Home = () => {
//   const [peliPopular, setPeliPopular] = useState(null);

//   useEffect(() => {
//     fetch(
//       "https://api.themoviedb.org/3/movie/popular?api_key=3360f605aa10d556eda2648188fe8d5a"
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setPeliPopular(data.results);
//       })
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="bg-slate-900 text-white">
//       <h1>Peliculas Populares</h1>
//       {peliPopular && (
//         <div className="flex">
//           {peliPopular.map((peli) => (
//             <div key={peli.id}>
//               <h2>{peli.title}</h2>
//               <p>{peli.overview}</p>
//               <img
//                 src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${peli.poster_path}`}
//                 alt={peli.title}
//                 className="w-48 h-auto"
//               />
//             </div>
//           ))}
//         </div>
//       )}
//       {!peliPopular && <p>Cargando peliculas...</p>}
//     </div>
//   );
// };

// export default Home;
