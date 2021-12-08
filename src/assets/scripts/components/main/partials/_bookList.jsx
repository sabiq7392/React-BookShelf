import PropTypes from 'prop-types';

export default function BookList(props) {
  const { bookId, bookTitle, popTitle } = props;

  return (
    <section id={bookId} className="book-list d-grid-opacity">
      <header id="popTitle" className={`pop_title ${popTitle}`}>
        <h3>{bookTitle}</h3>
      </header>
    </section>
  );
}

BookList.propTypes = {
  bookId: PropTypes.string,
  bookTitle: PropTypes.string,
  popTitle: PropTypes.string,
};
