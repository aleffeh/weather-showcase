import {Location} from '@store/weather/types';
import GetLocation from 'react-native-get-location';

interface ILocationService {
  getCurrentLocation: () => Promise<Location | null>;
}

const LocationService: ILocationService = {
  getCurrentLocation: async () => {
    const result = await GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    });

    if (result) {
      return {
        lat: result.latitude,
        lon: result.longitude,
      };
    }
    return null;
  },
};

export default LocationService;
