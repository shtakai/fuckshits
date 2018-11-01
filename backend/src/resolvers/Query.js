const Query = {
  japs(parent, args, ctx, info) {
    global.japs = global.japs || []
    return global.japs
  }

}

module.exports = Query
