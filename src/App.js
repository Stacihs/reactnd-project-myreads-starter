import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library';

class BooksApp extends Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  //Fetch all books from API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books});
      });
  }

  //Function to move a book to a different shelf
  switchShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(response => {
      let shelfList = this.state.books.slice(0);
      const books = shelfList.filter(shelfBook => shelfBook.id === book.id);
      if (books.length) {
        books[0].shelf = shelf;
      } else {
        shelfList.push(book);
      }
      this.setState({books: shelfList})
    })
  }

  
  render() {
    return (
      < Library books={this.state.books} onSwitchShelf={this.switchShelf}/>
    )
  }
}

export default BooksApp