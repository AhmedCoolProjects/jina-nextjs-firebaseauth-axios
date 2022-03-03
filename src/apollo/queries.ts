import { gql } from "@apollo/client";

export const GET_LAUNCHES_PAST = gql`
  query ExampleQuery($limit: Int) {
    roadster {
      apoapsis_au
    }
    launchesPast(limit: $limit) {
      links {
        flickr_images
      }
      id
      is_tentative
      launch_date_local
      launch_success
      launch_year
      mission_name
      rocket {
        rocket_name
        rocket_type
      }
      launch_site {
        site_name
        site_name_long
      }
    }
  }
`;
