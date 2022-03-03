import { gql } from "@apollo/client";

export const Mutations = gql`
  query Countries {
    countries {
      code
      name
      emoji
    }
  }
`;
