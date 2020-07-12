import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker
} from "react-simple-maps";

import styles from './MapChart.module.css';

const GEO_URL = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
//BROKEN
const MapChart = (props) => {
  return (
    <div className={styles.MapChart}>
        <h1>Interactive Map</h1>
        <ComposableMap className={styles.Map} scale="400">
        <Geographies
            geography={GEO_URL}
            fill="#D6D6DA"
            stroke="#FFFFFF"
            strokeWidth={0.5}
        >
            {({ geographies }) =>
            geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} fill="#EAEAEC" stroke="#D6D6DA" />)
            }
        </Geographies>
        <Annotation
            subject={[props.data.location.lat, props.data.location.lon]}
            dx={-50}
            dy={-30}
            connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 3,
            strokeLinecap: "round"
            }}
        >
            <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {props.data.location.name}
            </text>
        </Annotation>
        </ComposableMap>
    </div>
  );
};

export default MapChart;