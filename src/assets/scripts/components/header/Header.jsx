import logo from '../../../img/Logo.svg';
import SearchBar from './_searchBar';

export default function Header() {
  return (
    <header id="appHeader">
      <div className="container">
        <a href="index.html" className="logo-brand">
          <img src={logo} alt="Book Shelf" />
        </a>
        <SearchBar />
      </div>
    </header>
  );
}
