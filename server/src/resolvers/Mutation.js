const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function addHouse(parent, args, context, info) {
  
    const newHouse = await context.house.link.create({
      data: {
        owner_name_lastname: args.owner_name_lastname,
        land_line: args.land_line,
        cellphone: args.cellphone,
        province: args.province,
        municipality: args.municipality,
        address: args.address,
        type: args.type,
        construction: args.construction,
        carpentry: args.carpentry,
        garage: args.garage,
        status: args.status,
        square_meters: args.square_meters,
        price: args.price,
        interiors: args.interiors,
        exteriors: Striargs.exteriorsng,
        visited: args.visited,
        images_path: args.images_path,
        observations: args.observations
      }
    });
    // context.pubsub.publish('NEW_LINK', newLink);
  
    return newHouse;
  }

async function removeHouse(parent, args, context, info) {
    const deletedHouse = await context.prisma.house.delete({
        where: { id: args.id },
    })

    return "House Deleted"
}

async function signup(parent, args, context, info) {
    // 1
    const password = await bcrypt.hash(args.password, 10)
  
    // 2
    const user = await context.prisma.user.create({ data: { ...args, password } })
  
    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 4
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    // 1
    const user = await context.prisma.user.findUnique({ where: { name: args.name } })
    if (!user) {
      throw new Error('No such user found')
    }
  
    // 2
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 3
    return {
      token,
      user,
    }
  }
  
  module.exports = {
    signup,
    login,
    addHouse,
    removeHouse
  }