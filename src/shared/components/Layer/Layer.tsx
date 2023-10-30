import graphQLClient from "@/clients/graphQLClient";
import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const Layer: React.FC<IProps> = ({ children }) => (
  <ApolloProvider client={graphQLClient}>
    <div className="w-full mx-auto max-w-7xl px-24 pb-12">{children}</div>
  </ApolloProvider>
);

export default Layer;
