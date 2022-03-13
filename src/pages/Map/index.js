import React, {useState, useEffect} from 'react';
//Libraries 
import { GoogleMap, Marker, InfoWindow, LoadScript } from '@react-google-maps/api';
//JSON Server
import CompanyService from '../../services/CompanyService';
//Components 
import ContainerPage from '../../components/ContainerPage';
import Menu from '../../components/Menu';

const Map = () => {
  const [property, setProperty] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  useEffect(() => {
    getInput();
  }, []);

  const getInput = () => {
    CompanyService.getAll()
    .then((response) => {
      setProperty(response.data);
    })
  }

  const defaultCenter = {
    lat: 35.81243247098794, 
    lng: -8.088943993315855
  };

  return (
    <ContainerPage>
      <Menu/>
      <LoadScript
        id= 'google-map-script'
        googleMapsApiKey= "YOUR_APY_KEY"
      >
        <GoogleMap
          mapContainerStyle={{width: "100%", height: "100%"}}
          center={defaultCenter}
          zoom={2}
        >
        {property.map(item => {     
          return (
            <Marker 
              key={item.id} 
              position={{lat: item.latitude, lng: item.longitude}}  
              onClick={() => setSelectedProperty(item)}/>
          )
        })
        }
        {selectedProperty && (
          <InfoWindow
            position={{lat: selectedProperty.latitude,
            lng: selectedProperty.longitude}}
              clickable={true}
              onCloseClick={() => setSelectedProperty()}
            >
            <div>
              <p>Razão Social: {selectedProperty.companyName}</p>
              <p>Nome Fantasia: {selectedProperty.fantasyName}</p>
              <p>CNPJ: {selectedProperty.cnpj}</p>
              <p>Email: {selectedProperty.email}</p>
            </div>
          </InfoWindow>
          )
         }
        </GoogleMap>
      </LoadScript>
    </ContainerPage>
    )
}

export default Map;