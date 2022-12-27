import React, { useState, useCallback } from "react";
import DeckGL from '@deck.gl/react';
import {LineLayer} from '@deck.gl/layers';
import {Map} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import maplibregl from 'maplibre-gl';
// import DrawControl from '../src/react-map-gl/draw-control.ts';
import 'maplibre-gl/dist/maplibre-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
// import ReactMapboxGl from 'react-mapbox-gl';
import DrawControl from 'react-mapbox-gl-draw';
import './App.css';

const STYLE = {
  version: 8,
  sources: {
    "raster-tiles": {
      type: "raster",
      tiles: [
        // "https://osm.cloud.qr/tile/{z}/{x}/{y}.png",
        "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
        "https://c.tile.openstreetmap.org/{z}/{x}/{y}.png"
      ],
      tileSize: 256
    }
  },
  layers: [
    {
      id: "osm-tiles",
      type: "raster",
      source: "raster-tiles",
      minzoom: 0,
      maxzoom: 19
    }
  ]
};

// Set your mapbox access token here
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibWthdGF5ZXYiLCJhIjoiY2xia2RnNXNjMDBzODN2bWl3NmF4YWJ0byJ9.udSjtvjdoCfx10JKdYAgmg';


// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: 71.449074,
  latitude: 51.169392,
  zoom: 10,
  pitch: 0,
  bearing: 0
};

function App() {

  // const Map = ReactMapboxGl({
  //   accessToken:
  //     'pk.eyJ1IjoiZmFrZXVzZXJnaXRodWIiLCJhIjoiY2pwOGlneGI4MDNnaDN1c2J0eW5zb2ZiNyJ9.mALv0tCpbYUPtzT7YysA2g'
  // });

  function MapGl(){
    
    const layers = [
      // new LineLayer({id: 'line-layer', data})
    ];

    return <DeckGL
      
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers} 
      >
        {/* mapStyle="mapbox://styles/mapbox/streets-v9" */}
        <Map mapStyle={STYLE} mapLib={maplibregl}>
        {/* <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{
            height: '100vh',
            width: '100vw'
          }}
        > */}
          {/* <DrawControl
            position="top-left"
            displayControlsDefault={false}
            controls={{
              polygon: true,
              trash: true
            }}
            defaultMode="draw_polygon"
            onCreate={onUpdate}
            onUpdate={onUpdate}
            onDelete={onDelete}
          /> */}
          {/* <DrawControl position="top-left" ref={(drawControl) => { this.drawControl = drawControl; }} /> */}
        </Map>
        {/* <ControlPanel polygons={Object.values(features)} />  */}
      </DeckGL>
        ;

        
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <MapGl />
        
      </header>
    </div>
  );
}

export default App;
