module.exports = {
  getPublicNews: async () => {
    return [
      "this some news",
      "more public news",
      "another news story"
    ]
  },
  getPrivateFeed: async () => {
    return [
      "shh secret story",
      "more private news",
      "another gossip story"
    ]
  }
}