import React from "react";
import Map from "./Map";
import Point from "./Point";

function Click() {
    const [points, setPoints] = React.useState<Point[]>([]);

    const handleMapClick = React.useCallback((lng: number, lat: number) => {
        setPoints((pts) => [...pts, new Point(lng, lat)]);
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
            <Map style={{ borderRadius: 10 }} onClick={handleMapClick} />

            <ul>
                {points.map((p, index) => (
                    <li
                        key={index}
                        style={{ color: "whitesmoke", fontFamily: "monospace" }}
                    >
                        {p.toString()}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Click;
