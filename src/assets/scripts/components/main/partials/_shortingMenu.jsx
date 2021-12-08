import PropTypes from 'prop-types';

export default function ShortingBooks(props) {
  const { id, title } = props;

  const shortingActive = (shortingId) => {
    const shortingBooks = document.getElementsByClassName('shorting-book');

    const setActiveEachShorting = (shortingBook) => {
      if (shortingBook.id === shortingId) {
        shortingBook.classList.add('active');
      } else {
        shortingBook.classList.remove('active');
      }
    };

    [...shortingBooks].filter((shortingBook) => setActiveEachShorting(shortingBook));
  };

  return (
    <button
      id={id}
      type="button"
      className="shorting-book"
      onClick={() => shortingActive(id)}
    >
      {title}
    </button>
  );
}

ShortingBooks.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
