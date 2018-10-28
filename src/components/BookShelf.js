import React, { Component } from 'react'
import BookShelfControl from './components/BookShelfControl'
import Book from './components/Book'

class BookShelf extends Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Want to Read</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                            <div>
                                <Book />
                            </div>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}