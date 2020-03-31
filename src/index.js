const { GraphQLServer } = require('graphql-yoga')
// const { makeSchema } = require('nexus')
// const { PrismaClient } = require('@prisma/client')
const { nexusPrismaPlugin } = require('nexus-prisma')

const prisma = require('./db')
// const { Query, Mutation } = require('./types')

// import the resolvers
const resolvers = require('./resolvers')

new GraphQLServer({
  // schema: makeSchema({
  typeDefs: __dirname + '/graphql/schema.graphql',
  // types: [Query, Mutation],
  resolvers,
  // stops some error
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
  // plugins: [nexusPrismaPlugin()],
  // outputs: {
  //   schema: __dirname + '/../schema.graphql',
  //   typegen: __dirname + '/generated/nexus.ts',
  // },
  // }),
  context: { prisma },
}).start(() =>
  console.log(
    `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/js/graphql#using-the-graphql-api`,
  ),
)
