import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
});

export default function Map() {
    useEffect(() => {
        var container = L.DomUtil.get("map");

        if (container != null) {
            container._leaflet_id = null;
        }
        var map = L.map("map").setView([29.3909464, 76.9635023], 13);
        L.tileLayer(
            "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
            {
                attribution:
                    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 22,
                id: "mapbox/streets-v11",
                tileSize: 512,
                zoomOffset: -1,
                accessToken: import.meta.env.VITE_ACCESS_TOKEN,
            }
        ).addTo(map);
        L.Marker.prototype.options.icon = DefaultIcon;
        var marker = L.marker([29.3909464, 76.9635023]).addTo(map);
        // marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    }, []);
    return <div id="map" style={{ height: '110ch' }}></div>;
}