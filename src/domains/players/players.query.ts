import { gql } from "@apollo/client";

const PLAYER_FIELDS = gql`
  fragment PlayerFields on Player {
    id
    firstname
    lastname
    picture {
      url
    }
    stats {
      rank
      points
      weight
      height
      age
    }
  }
`;

export const GET_PLAYERS = gql`
  query {
    players {
      ...PlayerFields
    }
  }
  ${PLAYER_FIELDS}
`;

export const GET_PLAYER = gql`
  query GetPlayerById($id: ID!) {
    player(id: $id) {
      id
      firstname
      lastname
    }
  }
  ${PLAYER_FIELDS}
`;

export const GET_MACTCHES = gql`
  query {
    matches {
      players {
        id
      }
      winner {
        id
      }
      startTime
      endTime
    }
  }
`;