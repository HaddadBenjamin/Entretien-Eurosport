import { gql } from "@apollo/client";

export const GET_PLAYERS = gql`
  query {
    players {
      id
      firstname
      lastname
      shortname
      sex
    }
  }
`;
