async function getHouses(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { address: { contains: args.filter } },
          { owner_name_lastname: { contains: args.filter } },
          { observations: { contains: args.filter } },
        ],
      }
      : {}
  
    const houses = await context.prisma.house.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
  
    return houses
  }

async function houseById(parent, args, context) {
    return context.prisma.house.findUnique({ where: { id: parent.id } }).houses()
}
  
  module.exports = {
    getHouses,
    houseById
  }