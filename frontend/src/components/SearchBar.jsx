const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="text"
      placeholder="Search contacts"
      className="w-full rounded-lg border border-slate-700 bg-slate-950 p-2 text-slate-100 outline-none focus:ring-2 focus:ring-cyan-500"
    />
  );
};

export default SearchBar;
