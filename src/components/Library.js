import React, { Component } from 'react'
import BookShelf from './BookShelf'

class Library extends Component {
      state = {
          /**
           * TODO: Instead of using this state variable to keep track of which page
           * we're on, use the URL in the browser's address bar. This will ensure that
           * users can use the browser's back and forward buttons to navigate between
           * pages, as well as provide a good URL they can bookmark and share.
           */
          showSearchPage: false
      }

    render() {
        return (
            <div>
                <BookShelf />
            </div>
        )
    }
}

export default Library