import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "../css/leaflet.css"

const ClinicMap = () => {
  let position = [19.868365396909162, 75.3418964079301]

  if (typeof window !== "undefined") {
    return (
      <MapContainer
        center={position}
        zoom={14}
        scrollWheelZoom={false}
        class="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>Kranti Dental Clinic</Popup>
        </Marker>
      </MapContainer>
    )
  }

  return null
}

export default ClinicMap
