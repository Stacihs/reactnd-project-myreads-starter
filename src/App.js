import React, { Component } from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Library from './components/Library';

class BooksApp extends Component {
  
  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Library />
              </div>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>c
      </div>
    )
  }
}

export default BooksApp