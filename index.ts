import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './src/schema';
import { resolvers } from './src/resolvers';

const PORT = 4000;

const server = new ApolloServer({ typeDefs, resolvers });

startStandaloneServer(server, {
  listen: { port: PORT },
}).then(({ url }) => console.log(`🚀  Server ready at: ${url}`));
