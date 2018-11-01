const Mutations = {
  createJap(parent, args, ctx, info) {
    global.japs = global.japs || []
    const newJap = { name: args.name }
    global.japs.push(newJap)
    return newJap
  }

}

module.exports = Mutations
