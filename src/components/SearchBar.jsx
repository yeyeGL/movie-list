/* eslint-disable react/prop-types */

const SearchBar = ({ searchKey, setSearchKey, searchMovie }) => (
  <div className="bg-gray-500 flex p-4 rounded-md mb-6 shadow-blue-500 shadow-xl duration-3000">
    <h1 className="text-xl font-bold text-white my-1 mx-4">Buscador</h1>
    <form onSubmit={searchMovie}>
      <input
        type="text"
        placeholder="Buscar película ...."
        value={searchKey}
        onChange={(e) => setSearchKey(e.target.value)}
        className="h-10 rounded-xl p-4 bg-slate-800 placeholder-white shadow-xl hover:shadow-black duration-2000 hover:scale-95 text-white"
      />
      <button
        type="submit"
        className="bg-blue-700 p-2 rounded-xl mx-2 text-white font-semibold shadow-xl hover:shadow-black duration-2000 hover:scale-95"
      >
        Buscar
      </button>
    </form>
  </div>
);

export default SearchBar;
