import { useSelector } from 'react-redux'
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { GOOGLE_MAPS_API_KEY } from '../constants';
import { getVehicles } from '../redux';

const MapDisplay: React.FC = () => {
  const { map } = useSelector(getVehicles)

  if(!map || !map.center || !map.markers) return null

  // google.maps.marker

  return (
    <APIProvider apiKey={GOOGLE_MAPS_API_KEY}>
      <Map defaultCenter={map.center} defaultZoom={10}>
        <Marker position={map.markers.start} />
        <Marker position={map.markers.end} />
      </Map>
    </APIProvider>
  );
}

export default MapDisplay