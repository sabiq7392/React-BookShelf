import TitleBookShelf from './partials/_titleBookShelf';
import BookList from './partials/_bookList';

export default function CompleteBookShelf() {
  return (
    <section id="completeBookShelf" className="book-shelf">
      <TitleBookShelf
        title="Complete Shelf"
        icon="bi bi-check-circle"
      />

      <div className="book-list-container">
        <BookList
          bookId="bookListCompleted"
          bookTitle="Completed"
          popTitle="pop_title_complete"
        />
      </div>
    </section>
  );
}
