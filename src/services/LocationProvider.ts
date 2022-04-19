export interface Location {
  lat: number;
  lon: number;
}

export const LocationProvider = {
  async getCurrentLocation() {
    const location: Location = {
      lat: -20.960141,
      lon: -49.181841,
    };
    return Promise.resolve(location);
  },
};
