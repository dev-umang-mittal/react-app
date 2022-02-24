let user;

function createUser(userData) {
  user = new User(userData);
  return user;
}

function getUser() {
  return user;
}

class User {
  constructor(user) {
    this.user = user;
  }

  get() {
    return this.user;
  }
  set(user) {
    this.user = user;
  }
}

export { createUser, getUser };
