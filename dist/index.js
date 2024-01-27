import express from 'express';
import cors from "cors";
import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { typeDefs, resolvers } from "./graphql/index.js";
// const typeDefs = `#graphql
//   type Book {
//     title: String
//     author: String
//   }
//   type Query {
//     books: [Book]
//   }
//   type Query {
//     posts: [Book]
//   }
// `;
// const books = [
//   {
//     title: 'The Awakening',
//     author: 'Kate Chopin',
//   },
//   {
//     title: 'City of Glass',
//     author: 'Paul Auster',
//   },
// ];
// const resolvers = {
//   Query: {
//     books: () => books,
//     posts: () => books,
//   },
// };
dotenv.config();
const app = express();
const port = 4002;
const bootstrapServer = async () => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await server.start();
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use("/graphql", expressMiddleware(server));
    app.get("/", (req, res) => {
        res.send("Hello World!");
    });
    app.listen(port, () => {
        console.log(`🚀 Express ready at http://localhost:${port}`);
        console.log(`🚀 Graphql ready at http://localhost:${port}/graphql`);
    });
};
bootstrapServer();
//# sourceMappingURL=index.js.map