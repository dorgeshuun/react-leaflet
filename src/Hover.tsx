import React from "react";
import Map from "./Map";
import Point from "./Point";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

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
        <>
            <h1>hover</h1>
            <p>
                Use the <span style={{ fontStyle: "italic" }}>onMouseMove</span>{" "}
                event to track mouse movements over the map.
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
                    onMouseMove={handleMapHover}
                />

                {pos.in && (
                    <div style={{ fontFamily: "monospace" }}>
                        {new Point(pos.lng, pos.lat).toString()}
                    </div>
                )}
            </div>
            <div
                style={{
                    borderRadius: 10,
                    padding: 25,
                    margin: 25,
                    background: "#333333",
                }}
            >
                <SyntaxHighlighter language="typescript" style={agate}>
                    {
                        'import React from "react";\nimport Map from "./Map";\nimport Point from "./Point";\n\ntype Position = { in: false } | { in: true; lng: number; lat: number };\n\nfunction Hover() {\n    const [pos, setPos] = React.useState<Position>({ in: false });\n\n    const handleMapHover = React.useCallback(\n        (lng: number | null, lat: number | null) => {\n            if (lng === null || lat === null) {\n                setPos({ in: false });\n            } else {\n                setPos({ in: true, lng, lat });\n            }\n        },\n        []\n    );\n\n    return (\n        <>\n            <Map onMouseMove={handleMapHover} />\n            {pos.in && <div>{new Point(pos.lng, pos.lat).toString()}</div>}\n    );\n}\n'
                    }
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default Hover;
