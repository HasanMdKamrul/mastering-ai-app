import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./Find.css";

const Find = () => {
  return (
    <div>
      <h1 className="text-5xl flex justify-center font-extrabold dark:text-gray-200 text-center">
        We are located here
        <MdLocationOn />
      </h1>

      <div className="leaflet-container mx-auto container my-5">
        <MapContainer
          center={[23.7937, 90.4054]}
          zoom={100}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Find;
