// import {createUser, getUser, getUsers} from "../services/user.service.js";
export const usersResolver = {
    Query: {
        async users() {
            return {};
        },
        async user() {
            return {};
        },
    },
    Mutation: {
        async createUser(user) {
            return user;
        },
        async updateUser() { },
        async deleteUser() { },
    },
};
//# sourceMappingURL=user.resolver.js.map