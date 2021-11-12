import React from 'react';

class BookShelf extends React.Component {
  render() {
    return (
      <div>
        <section className="book-shelf">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FF6E74" className="bi bi-exclamation-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
            </svg> 
            <span>Incomplete Shelf</span>
          </h2>
          
          <ul id="linkIncompleteWrapper" className="incomplete_link_wrapper">
            <li>
              <a href="index.html" id="linkShowAllIncompleteBookShelf">
                Show All
              </a>
            </li>
            <li>
              <a href="index.html" id="linkImportantIncompleteBookShelf">
                Important!
              </a>
            </li>
            <li>
              <a href="index.html" id="linkMediumIncompleteBookShelf">
                Medium Priority
              </a>
            </li>
            <li>
              <a href="index.html" id="linkLowIncompleteBookShelf">
                Low Priority
              </a>
            </li>
          </ul>

          <ul>
            <li id="incompleteBookshelfListImportant" class="book_list d-grid-opacity">
              <section id="popTitle" class="pop_title pop_title_important">
                <h3>IMPORTANT!</h3>
              </section>
            </li>
            <li id="incompleteBookshelfListMedium" class="book_list">
              <section id="popTitle" class="pop_title pop_title_medium">
                <h3>MEDIUM</h3>
              </section>
            </li>
            <li id="incompleteBookshelfListLow" class="book_list">
              <section id="popTitle" class="pop_title pop_title_low">
                <h3>LOW</h3>
              </section>
            </li>
          </ul>
        </section>

        <section class="book_shelf">
          <h2>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#199D5E" class="bi bi-check-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
            </svg>
            <span>Complete Shelf</span> 
          </h2>
          <ul>
            <li id="completeBookshelfList" class="book_list d-grid-opacity">
              <section id="popTitle" class="pop_title pop_title_complete">
                <h3>COMPLETED</h3>
              </section>
            </li>
          </ul>
        </section>  
      </div>
    );
  }
}

export default BookShelf;