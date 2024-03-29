import React from "react";
import Leaflet from "leaflet";
import "leaflet/dist/leaflet.css";
import Tile from "./Tile";
import { CSSProperties } from "react";

const WIDTH = 500;
const HEIGHT = 300;
const LAT = 51.51;
const LNG = -0.08;
const ZOOM = 13;
const OSM_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";

const nullFunction = () => {};

type Extent = { west: number; south: number; east: number; north: number };

type Props = {
    initialView?: { lng: number; lat: number; zoom: number };
    basemapProviderUrl?: string;
    style?: CSSProperties;
    points?: {
        id: string;
        lng: number;
        lat: number;
        color?: string;
        icon?: string;
        title?: string;
    }[];
    extent?: Extent;
    onViewChange?: (extent: Extent, tiles: Tile[]) => void;
    onMouseMove?: (lng: number | null, lat: number | null) => void;
    onClick?: (lng: number, lat: number) => void;
    onSelect?: (id: string) => void;
    onClickaway?: () => void;
};

function pointsToString(pts?: { id: string; lng: number; lat: number }[]) {
    if (pts === undefined) {
        return "";
    }

    return pts
        .sort((a, b) => a.id.localeCompare(b.id))
        .map(p => p.id + ":" + ("color" in p ? p.color : "."))
        .join("-");
}

function makeHtmlMarker(
    color: string,
    label: string,
    img?: string,
    title?: string
) {
    return `
        <div>
            <div style="color:${color};font-size:15px;top:-22px;position:absolute">
                ${title || ""}
            </div>
            <div aria-label=${label} style="width:30px;height:30px;border-radius: 50% 50% 50% 0;transform:rotate(-45deg);border: 1px solid black;background:${color}">
                ${
                    img &&
                    `<img src=${img} style="transform:rotate(+45deg);position:absolute;left:3px;top:3px;" />`
                }
            </div>
        </div>
    `;
}

function diff(a: Iterable<string>, b: Iterable<string>) {
    const _a = Array.from(a);
    const _b = Array.from(b);

    const __a = new Set(a);
    const __b = new Set(b);

    return {
        toDel: _a.filter(x => !__b.has(x)),
        toAdd: _b.filter(x => !__a.has(x)),
    };
}

function _Map({
    initialView = { lng: LNG, lat: LAT, zoom: ZOOM },
    basemapProviderUrl = OSM_URL,
    style,
    points = [],
    extent,
    onViewChange = nullFunction,
    onMouseMove = nullFunction,
    onClick = nullFunction,
    onSelect = nullFunction,
    onClickaway = nullFunction,
}: Props) {
    const mapId = React.useId();
    const mapRef = React.useRef<Leaflet.Map | null>();
    const basemapRef = React.useRef<Leaflet.TileLayer | null>();
    const lyrRef = React.useRef<Leaflet.LayerGroup | null>();
    const pointRef = React.useRef<Map<string, Leaflet.Layer>>(new Map());

    React.useEffect(() => {
        const basemap = Leaflet.tileLayer(basemapProviderUrl);
        const lyr = Leaflet.layerGroup();
        const map = Leaflet.map(mapId, {
            layers: [basemap, lyr],
            center: { lng: initialView.lng, lat: initialView.lat },
            zoom: initialView.zoom,
            zoomControl: false,
        });

        mapRef.current = map;
        basemapRef.current = basemap;
        lyrRef.current = lyr;

        return () => {
            map.remove();
        };
    }, []);

    React.useEffect(() => {
        let basemap = basemapRef.current;
        const map = mapRef.current;

        if (!basemap || !map) {
            throw new Error();
        }

        basemap.removeFrom(map);
        basemap = Leaflet.tileLayer(basemapProviderUrl);
        basemap.addTo(map);
    }, [basemapProviderUrl]);

    React.useEffect(
        () => {
            const map = mapRef.current;

            if (!map) {
                throw new Error();
            }

            if (!extent) {
                return;
            }

            const sw = Leaflet.latLng(extent.south, extent.west);
            const ne = Leaflet.latLng(extent.north, extent.east);
            map.fitBounds(Leaflet.latLngBounds(sw, ne));
        },
        extent
            ? [extent.west, extent.east, extent.north, extent.south]
            : [0, 0, 0, 0]
    );

    React.useEffect(() => {
        const lyrGroup = lyrRef.current;
        const oldPoints = pointRef.current;

        if (!lyrGroup || !oldPoints) {
            throw new Error();
        }

        const newPoints = new Map(points.map(p => [p.id, p]));

        const { toDel, toAdd } = diff(oldPoints.keys(), newPoints.keys());

        for (const p of toDel) {
            oldPoints.get(p)?.remove();
            oldPoints.delete(p);
        }

        for (const p of toAdd) {
            const point = newPoints.get(p);

            if (!point) {
                throw new Error();
            }

            const lyr = Leaflet.marker(point, {
                icon: Leaflet.divIcon({
                    className: "custom-div-icon",
                    html: makeHtmlMarker(
                        point.color || "dodgerblue",
                        "marker-" + point.id,
                        point.icon || "",
                        point.title
                    ),
                    iconSize: [30, 42],
                    iconAnchor: [15, 42],
                }),
            })
                .on("click", () => {
                    onSelect(p);
                })
                .addTo(lyrGroup);
            oldPoints.set(p, lyr);
        }
    }, [pointsToString(points), onSelect]);

    React.useEffect(() => {
        const map = mapRef.current;

        if (!map) {
            throw new Error();
        }

        map.on("click", e => {
            onClick(e.latlng.lng, e.latlng.lat);
            onClickaway();
        });

        map.on("moveend", () => {
            const bounds = map.getBounds();
            const zoom = map.getZoom();

            const west = bounds.getWest();
            const south = bounds.getSouth();
            const east = bounds.getEast();
            const north = bounds.getNorth();

            const extent = { west, south, east, north };
            const tiles = Tile.fromExtent(west, south, east, north, zoom);

            onViewChange(extent, tiles);
        });

        map.on("mousemove", e => {
            onMouseMove(e.latlng.lng, e.latlng.lat);
        });

        map.on("mouseout", () => {
            onMouseMove(null, null);
        });

        map.fire("moveend");
    }, [onClick, onMouseMove, onViewChange, onClickaway]);

    return (
        <div
            id={mapId}
            style={{
                width: WIDTH,
                height: HEIGHT,
                background: "lightgray",
                cursor: "default",
                ...style,
            }}
        ></div>
    );
}

export default _Map;
