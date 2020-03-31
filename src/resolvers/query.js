const Query = {
  hello: (_, args) => `Hello ${args.name || 'World'}!`,
  // users: (root, args, ctx, info) => ctx.prisma.query.users({}, info),//doesnt work
  users: (root, args, ctx, info) => {
    // console.log(`Query.feed - info: `, JSON.stringify(info))
    return ctx.prisma.users.findMany(
      {
        where: {},
        // where: { id: 11 },
        // where: { id: { equals: 11 } },
      },
      info,
    )
  },
}
module.exports = { Query }
