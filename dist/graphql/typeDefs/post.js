export const postGraphql = `
type Post {
  id: String
  title: String
  content: String
  authorId: String
}

type Query {
  post: Post
  posts: [Post]
}

input PostInput {
  title: String
  content: String
  authorId: String
}

type Mutation {
  createPost(input: PostInput!): Post
  updatePost(input: PostInput!): Post
  deletePost(id: String!): Post
}

`;
//# sourceMappingURL=post.js.map