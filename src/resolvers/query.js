// const { PrismaClient } = require('@prisma/client')

// const prisma = new PrismaClient()

const Query = {
  hello: (_, args) => `Hello ${args.name || 'World'}!`,
  // users: (root, args, ctx, info) => ctx.prisma.query.users({}, info),//doesnt work
  // users: (root, args, ctx, info) => {
  //   // console.log(`Query.feed - info: `, JSON.stringify(info))
  //   return ctx.prisma.users.findMany(
  //     {
  //       where: {},
  //       // where: { id: 11 },
  //       // where: { id: { equals: 11 } },
  //     },
  //     info,
  //   )
  // },

  users: async (root, args, ctx, info) => {
    // console.log(`Query.feed - ctx: `, ctx)
    // console.log(`Query.feed - info: `, JSON.stringify(info))
    // return await ctx.prisma.users.findMany({ where: { id: 11 } }, info)

    let u = await ctx.prisma.users.findMany({
      // where: {
      //   id: 2,
      // },
      // info,
    })
    // console.log('u: ', u)
    return u
  },
}
module.exports = { Query }
