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

export default User;
