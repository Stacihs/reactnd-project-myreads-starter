import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library'
import Search from './components/Search'

class BooksApp extends Component {
  state = {
    books: []
  }

  //Fetch all books from API
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })
    })
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
      this.setState({
        books: shelfList
      })
    })
  }

  
  render() {
    return (
      <div>
        <Route exact path="/" render = {() => (
            <Library 
              books={this.state.books} 
              onSwitchShelf={this.switchShelf} 
            />
        )}/>
        <Route path="/search" render = {() => (
          <Search
            books={this.state.books}
            onSwitchShelf={this.switchShelf} 
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp