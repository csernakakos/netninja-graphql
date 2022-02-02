const graphql = require("graphql");
const _ = require("lodash");

const myBooks = [
    {name: "Rev Road", genre: "Drama", id: "1", authorId: "1"},
    {name: "The Leftovers", genre: "Drama", id: "2", authorId: "2"},
    {name: "Atonement", genre: "Theatre", id: "3", authorId: "3"},
    {name: "The Leftovers II", genre: "Drama", id: "4", authorId: "2"},
    {name: "The Other Book", genre: "Drama", id: "5", authorId: "2"},
    {name: "Sunday", genre: "Theatre", id: "6", authorId: "2"},
];

const myAuthors = [
    {name: "Terry P", age: 26, id: "1"},
    {name: "Brandon S", age: 44, id: "2"},
    {name: "Patrik R", age: 77, id: "3"},
]

const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt, GraphQLSchema } = graphql;

const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve: (parent, args) => {
                // parent object contains all the book details, because RootQuery > book > the returned book contains name, genre id, authorId
                console.log(parent);
                console.log(parent.authorId);

                // return the author whose id is the same as the required book's id:
                return _.find(myAuthors, {id: parent.authorId})
            }
        }
    })
});

const AuthorType = new GraphQLObjectType({
    name: "Author",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
    })
});

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        book: {
            type: BookType,     
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
               return _.find(myBooks, {id: args.id});
            }
        },
        author: {
            type: AuthorType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args) {
                return _.find(myAuthors, {id: args.id});
            }
        }
    }
});

// Create new schema and define which query will be the start query.
module.exports = new GraphQLSchema ({
    query: RootQuery,
})

