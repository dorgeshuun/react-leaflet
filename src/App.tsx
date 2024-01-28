import React from "react";
import Map from "./Map";
import "./App.css";

type Bounds = {
    west: number;
    south: number;
    east: number;
    north: number;
};

type MousePos = { in: true; lng: number; lat: number } | { in: false };

function App() {
    const [bounds, setBounds] = React.useState<Bounds | null>(null);
    const [mousePos, setMousePos] = React.useState<MousePos>({ in: false });

    const handleMapViewChange = (
        west: number,
        south: number,
        east: number,
        north: number
    ) => {
        setBounds({ west, south, east, north });
    };

    const handleMouseMove = (mousePos: MousePos) => {
        setMousePos(mousePos);
    };

    const boundsStr = bounds
        ? `${bounds.west.toFixed(2)} ${bounds.south.toFixed(
              2
          )} ${bounds.east.toFixed(2)} ${bounds.north.toFixed(2)}`
        : "";

    const mousePosStr = mousePos.in
        ? `${mousePos.lng.toFixed(5)}  ${mousePos.lat.toFixed(5)}`
        : "";

    return (
        <div
            style={{ width: "100vw", height: "100vh", background: "lightgray" }}
        >
            <div style={{ position: "fixed", zIndex: 401, left: 0, top: 0 }}>
                {boundsStr}
            </div>
            <div style={{ position: "fixed", zIndex: 401, left: 0, top: 20 }}>
                {mousePosStr}
            </div>
            <Map
                onViewChange={handleMapViewChange}
                onMouseMove={handleMouseMove}
            />
        </div>
    );
}

export default App;
