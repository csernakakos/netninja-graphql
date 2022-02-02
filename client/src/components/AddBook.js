import React, {Component} from "react";
import {useQuery} from "@apollo/client";
import {getAuthors} from "../queries/queries";

function AddBook() {
    const {loading, error, data} = useQuery(getAuthors);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;
    console.log(data, "AUTHORS");
    
    return ( 

        
    <form id="add-book">
        <div className="field">
            <label>Book name:</label>
            <input type="text" />
        </div>

        <div className="field">
            <label>Genre:</label>
            <input type="text" />
        </div>

        <div className="field">
            <label>Author:</label>
            <select>
                <option>Select an author</option>
                {data.authors.map(author => {
                    return <option value={author.id} key={author.id}>{author.name}</option>
                })}
               
            </select>
        </div>

        <button>+</button>
    </form>
    );
  }

export default AddBook;