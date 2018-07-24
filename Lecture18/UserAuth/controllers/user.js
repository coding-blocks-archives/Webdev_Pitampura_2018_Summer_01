const users = {
  "one@user.com": {
    "name": "USER ONE",
    "age": 20,
    "password": "passone"
  },
  "two@user.com": {
    "name": "USER TWO",
    "age": 30,
    "password": "passtwo"
  },
}

module.exports = {
  getUser: async (email) => {
    return users[email]
  },
  createUser: async (email, password, name, age) => {
    if (users[email]) {
      return false
    }
    users[email] = {
      password,
      name,
      age
    }
    return users[email]
  }
}