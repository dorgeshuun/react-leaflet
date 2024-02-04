import React from "react";
import Map from "./Map";

type Tile = { x: number; y: number; z: number };

function Extent() {
    const [tiles, setTiles] = React.useState<Tile[]>([]);

    const handleMapViewChange = React.useCallback((_: any, tiles: Tile[]) => {
        setTiles(tiles);
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

            <ul style={{ color: "whitesmoke", fontFamily: "monospace" }}>
                {tiles.map((t) => (
                    <li key={t.toString()}>{t.toString()}</li>
                ))}
            </ul>
        </div>
    );
}

export default Extent;
