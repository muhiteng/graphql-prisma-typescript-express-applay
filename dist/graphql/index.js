import { usersResolver } from './resolvers/user.resolver.js';
import { postGraphql } from './typeDefs/post.js';
import { userGraphql } from './typeDefs/user.js';
export const typeDefs = `
    ${postGraphql}
    ${userGraphql}
`;
export const resolvers = {
    Query: {
        ...usersResolver.Query,
    },
    Mutation: {
        ...usersResolver.Mutation,
    },
};
//# sourceMappingURL=index.js.map