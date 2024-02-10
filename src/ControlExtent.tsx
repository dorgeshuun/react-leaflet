import React from "react";
import Map from "./Map";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

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
        <>
            <h1>controlled extent</h1>
            <p>
                Controlling the map extent is possible through the{" "}
                <span style={{ fontStyle: "italic" }}>extent</span> prop. To be
                used in conjunction with the{" "}
                <span style={{ fontStyle: "italic" }}>onViewChange</span> prop.
            </p>
            <div
                style={{
                    width: 800,
                    margin: 40,
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

                <div style={{ fontFamily: "monospace" }}>
                    <button onClick={handleSetExtentFromPoints(points)}>
                        center on points
                    </button>
                </div>
            </div>
            <div
                style={{
                    borderRadius: 10,
                    padding: 25,
                    margin: 25,
                    background: "#333333",
                }}
            >
                <ReactSyntaxHighlighter language="typescript" style={agate}>
                    {
                        'import React from "react";\nimport Map from "react-map";\n\nconst points = [\n    { id: "#1", lng: -0.07610, lat: 51.50807 },\n    { id: "#2", lng: -0.10334, lat: 51.51515 },\n    { id: "#3", lng: -0.08755, lat: 51.50180 },\n];\n\ntype Point = { lng: number; lat: number };\ntype Extent = { west: number; east: number; south: number; north: number };\n\nfunction getExtentFromPoints(points: Point[]) {\n    return points.reduce(\n        (x, y) => ({\n            west: Math.min(x.west, y.lng),\n            east: Math.max(x.east, y.lng),\n            south: Math.min(x.south, y.lat),\n            north: Math.max(x.north, y.lat),\n        }),\n        {\n            west: Number.MAX_VALUE,\n            east: Number.MIN_VALUE,\n            south: Number.MAX_VALUE,\n            north: Number.MIN_VALUE,\n        }\n    );\n}\n\nfunction ControlExtent() {\n    const [extent, setExtent] = React.useState<Extent | undefined>(undefined);\n\n    const handleSetExtentFromPoints = (points: Point[]) => () => {\n        setExtent(getExtentFromPoints(points));\n    };\n\n    const handleMapViewChange = React.useCallback((extent: Extent, _: any) => {\n        setExtent(extent);\n    }, []);\n\n    return (\n        <>\n            <Map\n                points={points}\n                extent={extent}\n                onViewChange={handleMapViewChange}\n            />\n            <button onClick={handleSetExtentFromPoints(points)}>\n                center on points\n            </button>\n        </>\n    );\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default ControlExtent;
