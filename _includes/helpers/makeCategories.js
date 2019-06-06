module.exports = function(collection) {
  let categories = {}

    // Every rendered page

  collection.getAllSorted().forEach(item => {
    let category = item.data.category

      // Ignore the ones without a category

    if (typeof category !== "string")
      return

    if (Array.isArray(categories[category]))
        //  category array exists? Just push
      categories[category].push(item)
    else
        //  Otherwise create it and
        //  make `item` the first, uh, item.
      categories[category] = [item]
  })

  return categories
};
