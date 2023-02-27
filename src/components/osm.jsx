import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';

const OSM = () => {
    return (
        <div style={{ width: "90vh", height: "70vh", overflow: "hidden" }}>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution= '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url= 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
}

export default OSM;