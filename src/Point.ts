function formatCoord(value: number, leftPadding: number) {
    const [whole, decimal] = Math.abs(value).toFixed(5).split(".");
    const result = whole.padStart(leftPadding, "0") + "." + decimal;
    return (value < 0 ? "-" : "+") + result;
}

class Point {
    lng: number;
    lat: number;

    constructor(lng: number, lat: number) {
        this.lng = lng;
        this.lat = lat;
    }

    toString() {
        return `(${formatCoord(this.lng, 3)}, ${formatCoord(this.lat, 2)})`;
    }
}

export default Point;
