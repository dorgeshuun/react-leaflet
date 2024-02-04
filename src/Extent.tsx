import React from "react";
import Map from "./Map";
import Point from "./Point";

type _Extent = {
    north: number;
    south: number;
    east: number;
    west: number;
};

function Extent() {
    const [extent, setExtent] = React.useState<_Extent | undefined>(undefined);

    const handleMapViewChange = React.useCallback((extent: _Extent, _: any) => {
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
                onViewChange={handleMapViewChange}
            />

            {extent && (
                <ul style={{ color: "whitesmoke", fontFamily: "monospace" }}>
                    <li>{new Point(extent.west, extent.south).toString()}</li>
                    <li>{new Point(extent.east, extent.north).toString()}</li>
                </ul>
            )}
        </div>
    );
}

export default Extent;
