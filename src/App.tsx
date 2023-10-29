import { ApolloProvider } from "@apollo/client";
import graphQLClient from "./clients/graphQLClient";
import Players from "./domains/players/components/Players/Players";
import "./styles/tailwind.css";

const App = () => (
  <ApolloProvider client={graphQLClient}>
    <Players />
  </ApolloProvider>
);

export default App;
