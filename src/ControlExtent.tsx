import React from "react";
import Map from "./Map";

const points = [
    {
        id: "#1",
        lng: -0.0761,
        lat: 51.50807,
    },
    {
        id: "#2",
        lng: -0.10334,
        lat: 51.51515,
    },
    {
        id: "#3",
        lng: -0.08755,
        lat: 51.5018,
    },
];

type Point = { lng: number; lat: number };
type Extent = { west: number; east: number; south: number; north: number };

function getExtentFromPoints(points: Point[]) {
    return points.reduce(
        (x, y) => ({
            west: Math.min(x.west, y.lng),
            east: Math.max(x.east, y.lng),
            south: Math.min(x.south, y.lat),
            north: Math.max(x.north, y.lat),
        }),
        {
            west: Number.MAX_VALUE,
            east: Number.MIN_VALUE,
            south: Number.MAX_VALUE,
            north: Number.MIN_VALUE,
        }
    );
}

function ControlExtent() {
    const [extent, setExtent] = React.useState<Extent | undefined>(undefined);

    const handleSetExtentFromPoints = (points: Point[]) => () => {
        setExtent(getExtentFromPoints(points));
    };

    const handleMapViewChange = React.useCallback((extent: Extent, _: any) => {
        setExtent(extent);
    }, []);

    return (
        <div
            style={{
                width: 800,
                height: 500,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <Map
                style={{ borderRadius: 10 }}
                points={points}
                extent={extent}
                onViewChange={handleMapViewChange}
            />

            <div style={{ color: "whitesmoke", fontFamily: "monospace" }}>
                <button onClick={handleSetExtentFromPoints(points)}>
                    center on points
                </button>
            </div>
        </div>
    );
}

export default ControlExtent;
