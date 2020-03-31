const Subscription = {
  // feedSubscription: {
  //   subscribe: async (parent, args, context) => {
  //     return context.prisma.$subscribe
  //       .lead({
  //         mutation_in: ["CREATED", "UPDATED"],
  //       })
  //       .node();
  //   },
  //   resolve: payload => {
  //     return payload;
  //   },
  // },
};

module.exports = { Subscription };
