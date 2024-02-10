import React from "react";
import Map from "./Map";
import Point from "./Point";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

function Click() {
    const [points, setPoints] = React.useState<Point[]>([]);

    const handleMapClick = React.useCallback((lng: number, lat: number) => {
        setPoints((pts) => [...pts, new Point(lng, lat)]);
    }, []);

    return (
        <>
            <h1>click</h1>
            <p>
                Use the <span style={{ fontStyle: "italic" }}>onClick</span>{" "}
                prop to listen to click events.
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
                <Map style={{ borderRadius: 10 }} onClick={handleMapClick} />
                <ul>
                    {points.map((p, index) => (
                        <li
                            key={index}
                            style={{
                                fontFamily: "monospace",
                            }}
                        >
                            {p.toString()}
                        </li>
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
                <SyntaxHighlighter language="typescript" style={agate}>
                    {
                        'import React from "react";\nimport Map from "react-leaflet";\nimport Point from "./Point";\n\nfunction Click() {\n    const [points, setPoints] = React.useState<Point[]>([]);\n\n    const handleMapClick = React.useCallback((lng: number, lat: number) => {\n        setPoints((pts) => [...pts, new Point(lng, lat)]);\n    }, []);\n    \n    return (\n        <>\n            <Map onClick={handleMapClick} />\n            <ul>\n                {points.map((p, index) => (\n                    <li key={index}>{p.toString()}</li>\n                ))}\n            </ul>\n        </>\n    );\n}\n'
                    }
                </SyntaxHighlighter>
            </div>
        </>
    );
}

export default Click;
