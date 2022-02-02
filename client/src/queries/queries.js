import {gql} from "@apollo/client";

const getAuthors = gql`
query {
  authors {
    name
    id
    age
  }
}
`;

const getBooks = gql`
query {
  books {
    name
    id
  }
}
`;

export {
    getAuthors,
    getBooks
}