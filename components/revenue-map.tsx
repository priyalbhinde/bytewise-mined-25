"use client"

import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json"

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5074] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
  { name: "Sydney", coordinates: [151.2093, -33.8688] },
]

export function RevenueMap() {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">Revenue by Region</h3>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 100,
        }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => <Geography key={geo.rsmKey} geography={geo} fill="#374151" stroke="#1F2937" />)
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={4} fill="#3B82F6" />
            <text textAnchor="middle" y={-10} style={{ fontSize: "8px", fill: "#E5E7EB" }}>
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  )
}

