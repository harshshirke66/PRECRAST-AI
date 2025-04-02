 

const MAPPLES_TOKEN = 'ENTER YOUR TOKEN';

export const getLocationFromCoordinates = async (lat: number, lon: number) => {
  // Simulate API call with mock data
  return {
    city: 'New York',
    state: 'NY',
    country: 'USA',
    formatted_address: `${lat.toFixed(4)}, ${lon.toFixed(4)}, New York, NY, USA`
  };
};

export const searchLocation = async (query: string) => {
  // Simulate location search with mock data
  return [{
    lat: 40.7128,
    lon: -74.0060,
    formatted_address: `${query}, New York, NY, USA`,
    city: 'New York',
    state: 'NY',
    country: 'USA'
  }];
};

export const calculateDistance = async (
  fromLat: number,
  fromLon: number,
  toLat: number,
  toLon: number
) => {
  // Calculate actual distance using Haversine formula
  const R = 6371e3; // Earth's radius in meters
  const φ1 = fromLat * Math.PI/180;
  const φ2 = toLat * Math.PI/180;
  const Δφ = (toLat-fromLat) * Math.PI/180;
  const Δλ = (toLon-fromLon) * Math.PI/180;

  const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ/2) * Math.sin(Δλ/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  const distance = R * c; // in metres

  return {
    distance,
    duration: distance / 10 // Rough estimate: 10 m/s average speed
  };
};