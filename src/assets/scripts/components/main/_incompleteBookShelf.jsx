import TitleBookShelf from './partials/_titleBookShelf';
import ShortingBooks from './partials/_shortingMenu';
import BookList from './partials/_bookList';

export default function IncompleteBookShelf() {
  return (
    <section id="incompleteBookShelf" className="book-shelf">
      <TitleBookShelf
        title="Incomplete Shelf"
        icon="bi bi-exclamation-circle"
      />

      <div id="shortingMenu">
        <ShortingBooks
          id="shortingBookListShowAll"
          title="Show All"
        />
        <ShortingBooks
          id="shortingBookListImportant"
          title="Important"
        />
        <ShortingBooks
          id="shortingBookListMedium"
          title="Medium"
        />
        <ShortingBooks
          id="shortingBookListLow"
          title="Low"
        />
      </div>

      <div className="book-list-container">
        <BookList
          bookId="bookListIncompleteImportant"
          bookTitle="Important"
          popTitle="pop_title_important"
        />
        <BookList
          bookId="bookListIncompleteMedium"
          bookTitle="Medium"
          popTitle="pop_title_medium"
        />
        <BookList
          bookId="bookListIncompleteLow"
          bookTitle="Low"
          popTitle="pop_title_low"
        />
      </div>
    </section>
  );
}
