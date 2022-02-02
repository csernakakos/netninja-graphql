import React, {Component} from "react";
import {useQuery} from "@apollo/client";
import {getBooks} from "../queries/queries";



function BookList() {
    const {loading, error, data} = useQuery(getBooks);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    // console.log(data);

    return (
      <div>
        <ul id="book-list">
          {data.books.map(book => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    );
  }

export default BookList;