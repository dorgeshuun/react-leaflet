import React from "react";
import Map from "./Map";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

type Tile = { x: number; y: number; z: number };

function Extent() {
    const [tiles, setTiles] = React.useState<Tile[]>([]);

    const handleMapViewChange = React.useCallback((_: any, tiles: Tile[]) => {
        setTiles(tiles);
    }, []);

    return (
        <>
            <h1>tiles</h1>
            <p>
                Alternatively, you can list the osm tiles being currently
                displayed.
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
                    onViewChange={handleMapViewChange}
                />

                <ul style={{ fontFamily: "monospace" }}>
                    {tiles.map((t) => (
                        <li key={t.toString()}>{t.toString()}</li>
                    ))}
                </ul>
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
                        'import React from "react";\nimport Map from "react-leaflet";\n\ntype Tile = { x: number; y: number; z: number };\n\nfunction Extent() {\n    const [tiles, setTiles] = React.useState<Tile[]>([]);\n\n    const handleMapViewChange = React.useCallback((_: any, tiles: Tile[]) => {\n        setTiles(tiles);\n    }, []);\n\n    return (\n        <>\n            <Map onViewChange={handleMapViewChange} />\n            <ul>\n                {tiles.map((t) => (\n                    <li key={t.toString()}>{t.toString()}</li>\n                ))}\n            </ul>\n        </>\n    );\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default Extent;
