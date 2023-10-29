import { ApolloProvider } from "@apollo/client";
import graphQLClient from "./clients/graphQLClient";
import "./styles/tailwind.css";
import Layer from "./shared/components/Layer/Layer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PlayersPage from "./pages/Players";
import PlayerPage from "./pages/Player";
import ErrorPage from "./pages/Error";

const App = () => (
  <ApolloProvider client={graphQLClient}>
    <Layer>
      <RouterProvider
        router={createBrowserRouter([
          {
            path: "/",
            element: <PlayersPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: "/players",
            element: <PlayersPage />,
             errorElement: <ErrorPage />,
          },
          {
            path: "players/:playerId",
            element: <PlayerPage />,
            errorElement: <ErrorPage />,
          },
        ])}
      />
    </Layer>
  </ApolloProvider>
);

export default App;
