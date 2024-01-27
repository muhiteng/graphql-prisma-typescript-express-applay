export const userGraphql = `
type User {
  id: String!
  email: String!
  username: String
  posts: [Post]
}

input UserInput {
  email: String!
  username: String
}

type Query {
  user(id: String!): User
  users: [User]
}

type Mutation {
  createUser(input: UserInput!): User
  updateUser(input: UserInput!): User
  deleteUser(id: String!): User
}

`;
//# sourceMappingURL=user.js.map