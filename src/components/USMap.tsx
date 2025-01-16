// USMap.tsx
import React from 'react';
import { Geographies, Geography } from 'react-simple-maps';
import usMapData from '../assets/us-map.json';

// Replace with the correct path to your US states TopoJSON file
// const usStatesUrl = '/path-to-your-us-states-topojson.json';

const USMap: React.FC = () => {
  return (
    <Geographies geography={usMapData}>
      {({ geographies }) =>
        geographies.map((geo) => (
          <Geography
            key={geo.rsmKey}
            geography={geo}
            onMouseEnter={() => {
              console.log(`Hovered over ${geo.properties.NAME}`);
            }}
            onMouseLeave={() => {
              console.log('Mouse left');
            }}
            style={{
              default: {
                fill: '#D6D6DA',
                outline: 'none',
              },
              hover: {
                fill: '#F53',
                outline: 'none',
              },
              pressed: {
                fill: '#E42',
                outline: 'none',
              },
            }}
          />
        ))
      }
    </Geographies>
  );
};

export default USMap;
