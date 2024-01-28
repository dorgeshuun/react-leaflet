import React from "react";
import Leaflet from "leaflet";
import { v4 as uuidv4 } from "uuid";
import "leaflet/dist/leaflet.css";

const OSM_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const LAT = 51.51;
const LNG = -0.08;
const ZOOM = 13;

const mapId = uuidv4();

type Props = {
    onViewChange?: (
        west: number,
        south: number,
        east: number,
        north: number
    ) => void;
    onMouseMove?: (
        mousePos: { in: true; lng: number; lat: number } | { in: false }
    ) => void;
};

function Map(props: Props) {
    React.useEffect(() => {
        const map = new Leaflet.Map(mapId, {
            layers: [new Leaflet.TileLayer(OSM_URL)],
            center: { lng: LNG, lat: LAT },
            zoom: ZOOM,
            zoomControl: false,
        });

        map.on("moveend", () => {
            if (props.onViewChange) {
                const bounds = map.getBounds();
                props.onViewChange(
                    bounds.getWest(),
                    bounds.getSouth(),
                    bounds.getEast(),
                    bounds.getNorth()
                );
            }
        });

        map.on("mousemove", (e) => {
            if (props.onMouseMove) {
                props.onMouseMove({
                    in: true,
                    lng: e.latlng.lng,
                    lat: e.latlng.lat,
                });
            }
        });

        map.on("mouseout", () => {
            if (props.onMouseMove) {
                props.onMouseMove({ in: false });
            }
        });

        map.fire("moveend");
    }, []);

    return <div id={mapId} style={{ width: "100%", height: "100%" }}></div>;
}

export default Map;
