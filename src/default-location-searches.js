import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-rome',
    predictionPlace: {
      address: 'Rome, Italy',
      bounds: new LatLngBounds(new LatLng(42.140911, 12.855979), new LatLng(41.65548, 12.234478)),
    },
  },
  {
    id: 'default-milan',
    predictionPlace: {
      address: 'Milan, Italy',
      bounds: new LatLngBounds(new LatLng(45.535879, 9.278131), new LatLng(45.386746, 9.041552)),
    },
  },
  {
    id: 'default-turin',
    predictionPlace: {
      address: 'Turin, Italy',
      bounds: new LatLngBounds(new LatLng(45.140261, 7.773509), new LatLng(45.005561, 7.578021)),
    },
  },
  {
    id: 'default-naples',
    predictionPlace: {
      address: 'Naples, Italy',
      bounds: new LatLngBounds(new LatLng(40.91598, 14.353513), new LatLng(40.79119, 14.13331)),
    },
  },
  {
    id: 'default-bologna',
    predictionPlace: {
      address: 'Bologna, Italy',
      bounds: new LatLngBounds(new LatLng(44.556287, 11.433486), new LatLng(44.4209, 11.229817)),
    },
  },
];
