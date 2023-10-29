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
    country {
      picture {
        url
      }
      code
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

export const GET_MACTCHES = gql`
  query {
    matches {
      players {
        ...PlayerFields
      }
      winner {
        ...PlayerFields
      }
      startTime
      endTime
    }
  }
  ${PLAYER_FIELDS}
`;
