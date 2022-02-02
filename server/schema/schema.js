const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// define new object type with fields id, name, genre
const BookType = new GraphQLObjectType({
    name: "Book",
    fields: () => ({
        id: {type: GraphQLString},
        name: {type: GraphQLString},
        genre: {type: GraphQLString}
    })
});

// define root query: how we jump into the graph
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // the name matters! "book" will be the entry point to our query.
        book: {
            type: BookType,
            // mandatory arguments:
            args: {id: {type: GraphQLString}},
            resolve(parent, args) {
                // code to get data from the database. This resolve function will be fired when the server receives a query.
                // parent is for relationships between data
                // args is what gives us access to arguments such as the id, which the client sends along with the query.

            }
        }
    }
});

// Create new schema and define which query will be the start query.
module.exports = new GraphQLSchema ({
    query: RootQuery,
})

