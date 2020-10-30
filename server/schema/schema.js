const graphql = require('graphql')
const_ = require('lodash'
)
const { GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLSchema } = graphql


//dummy data
var books = [
    { name: 'book1', genre: 'genre1', id: '1' },
    { name: 'book2', genre: 'genre2', id: '2' },
    { name: 'book3', genre: 'genre3', id: '3' }
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLInt },
    })
})

const AurthorType = new GraphQLObjectType({
    name: 'Aurthor',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        age: { type: GraphQLString },
    })
})


const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } }
            resolve(parent, args) {
                 
                // args.id
                return _.find(books, (id: args.id))
            }
        },
        author{
            type:AurthorType,
            args:{id}
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})