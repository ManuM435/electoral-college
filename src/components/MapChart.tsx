// MapChart.tsx
import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import USMap from './USMap'; // Import your custom US map here

const geoUrl =
  'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

const MapChart: React.FC = () => {
  return (
    <ComposableMap>
      <Geographies geography={geoUrl}>
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
      <USMap /> {/* Include the US map component */}
    </ComposableMap>
  );
};

export default MapChart;
