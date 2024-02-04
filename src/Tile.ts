import { CRS, LatLng } from "leaflet";

function* tilesFromExtent(nw: LatLng, se: LatLng, zoom: number) {
    const { x: xmin, y: ymin } = CRS.EPSG3857.latLngToPoint(nw, zoom)
        .divideBy(256)
        .floor();

    const { x: xmax, y: ymax } = CRS.EPSG3857.latLngToPoint(se, zoom)
        .divideBy(256)
        .floor();

    for (let x = xmin; x <= xmax; x++) {
        for (let y = ymin; y <= ymax; y++) {
            yield new Tile(x, y, zoom);
        }
    }
}

class Tile {
    x: number;
    y: number;
    z: number;

    constructor(x: number, y: number, z: number) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    static fromExtent(
        west: number,
        south: number,
        east: number,
        north: number,
        zoom: number
    ) {
        const nw = new LatLng(north, west);
        const se = new LatLng(south, east);
        const tiles = tilesFromExtent(nw, se, zoom);
        return Array.from(tiles);
    }

    toString() {
        return `${this.x}-${this.y}-${this.z}`;
    }
}

export default Tile;
