declare module "@app-types" {
  export type LauncheCardProps = {
    id: string;
    links: {
      flickr_images: string[];
    };
    is_tentative: boolean;
    launch_date_local: string;
    launch_success: boolean;
    launch_year: string;
    mission_name: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    launch_site: {
      site_name: string;
      site_name_long: string;
    };
  };
}
