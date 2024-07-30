export interface LocationsType {
  current_country_id: number;
  locations: LocationType[];
  wp_total: number;
  total: number;
  success: boolean;
}

export interface LocationType {
  id: number;
  title: string;
  content?: string;
  opened?: boolean;
  mask?: string;
  towel?: string;
  fountain?: string;
  locker_room?: string;
  schedules?: ScheduleType[];
  street?: string;
  region?: string;
  city_name?: string;
  state_name?: string;
  uf?: string;
}

export interface ScheduleType {
  weekdays: string;
  hour: string;
}
