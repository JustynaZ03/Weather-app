export interface City {
  latitude: number;
  longitude: number;
  name: string;
  countryCode: string;
}

export interface TypeSearch {
  label: string;
  value: number;
}
export interface DataofWeather {
  city: string;

  weather: {
    description: string;
    icon: string;
  }[];

  main: {
    temp: number;
  };
}

export interface DataofForecast {
  list: {
    weather: {
      description: string | undefined;
      icon: string | undefined;
    }[];
    main: {
      temp_min: number;
      temp_max: number;
    };
  }[];
}
