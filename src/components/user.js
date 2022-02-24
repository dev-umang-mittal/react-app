let user;

function createUser(userData) {
  user = userData;
  return user;
}

function getUser() {
  return user;
}

function deleteUser() {
  user = undefined;
}

export { createUser, getUser, deleteUser };
