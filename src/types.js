const {
  queryType,
  mutationType,
  objectType,
  intArg,
  stringArg,
} = require('nexus')

// const User = objectType({
//   name: 'User',
//   definition(t) {
//     t.model.id()
//     t.model.name()
//     t.model.email()
//     t.model.posts({
//       pagination: false,
//     })
//   },
// })

// const Post = objectType({
//   name: 'Post',
//   definition(t) {
//     t.model.id()
//     t.model.title()
//     t.model.content()
//     t.model.published()
//     t.model.author()
//   },
// })

// const Query = objectType({
//   name: 'Query',
const Query = queryType({
  definition(t) {
    // t.crud.post()
    // t.list.field('feed', {
    //   type: 'Post',
    //   resolve: (_, _args, ctx) => {
    //     return ctx.prisma.post.findMany({
    //       where: { published: true },
    //     })
    //   },
    // })
    // t.list.field('filterPosts', {
    //   type: 'Post',
    //   args: {
    //     searchString: stringArg({ nullable: true }),
    //   },
    //   resolve: (_, { searchString }, ctx) => {
    //     return ctx.prisma.post.findMany({
    //       where: {
    //         OR: [
    //           { title: { contains: searchString } },
    //           { content: { contains: searchString } },
    //         ],
    //       },
    //     })
    //   },
    // })
  },
})

// const Mutation = objectType({
//   name: 'Mutation',
const Mutation = mutationType({
  definition(t) {
    // t.crud.createOneUser({ alias: 'signupUser' })
    // t.crud.deleteOnePost()
    // t.field('createDraft', {
    //   type: 'Post',
    //   args: {
    //     title: stringArg(),
    //     content: stringArg({ nullable: true }),
    //     authorEmail: stringArg(),
    //   },
    //   resolve: (_, { title, content, authorEmail }, ctx) => {
    //     return ctx.prisma.post.create({
    //       data: {
    //         title,
    //         content,
    //         published: false,
    //         author: {
    //           connect: { email: authorEmail },
    //         },
    //       },
    //     })
    //   },
    // })
    // t.field('publish', {
    //   type: 'Post',
    //   nullable: true,
    //   args: {
    //     id: intArg(),
    //   },
    //   resolve: (_, { id }, ctx) => {
    //     return ctx.prisma.post.update({
    //       where: { id: Number(id) },
    //       data: { published: true },
    //     })
    //   },
    // })
  },
})

// module.exports = { Query, Mutation, Post, User }
module.exports = { Query, Mutation }
