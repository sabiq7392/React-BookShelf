export default function SearchBar() {
  return (
    <section id="searchSection" className="search-section">
      <form id="searchBook" action="#">
        <input
          id="searchBookTitle"
          type="text"
          placeholder="Search Book Title..."
        />
        <button id="searchSubmit" type="submit">
          <i className="bi bi-search" />
        </button>
      </form>
    </section>
  );
}
