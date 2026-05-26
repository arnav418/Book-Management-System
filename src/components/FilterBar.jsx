const FilterBar = ({ books, selectedGenre, setSelectedGenre }) => {
  const genres = ["All", ...new Set(books.map((book) => book.genre))];

  return (
    <select
      className="filter-select"
      value={selectedGenre}
      onChange={(e) => setSelectedGenre(e.target.value)}
    >
      {genres.map((genre, index) => (
        <option key={index} value={genre}>
          {genre}
        </option>
      ))}
    </select>
  );
};

export default FilterBar;
