import React from 'react'
import Book from './Book'

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelf.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.shelf.books.map(book => (
                        <li key={book.id}>
                            <Book 
                                book={book}
                                onSwitchShelf={props.onSwitchShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
)

export default BookShelf