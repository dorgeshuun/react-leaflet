import React from "react";
import Map from "./Map";
import Point from "./Point";

type Position = { in: false } | { in: true; lng: number; lat: number };

function Hover() {
    const [pos, setPos] = React.useState<Position>({ in: false });

    const handleMapHover = React.useCallback(
        (lng: number | null, lat: number | null) => {
            if (lng === null || lat === null) {
                setPos({ in: false });
            } else {
                setPos({ in: true, lng, lat });
            }
        },
        []
    );

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
            <Map style={{ borderRadius: 10 }} onMouseMove={handleMapHover} />

            {pos.in && (
                <div style={{ color: "whitesmoke", fontFamily: "monospace" }}>
                    {new Point(pos.lng, pos.lat).toString()}
                </div>
            )}
        </div>
    );
}

export default Hover;
