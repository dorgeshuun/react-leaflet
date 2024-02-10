import React from "react";
import Map from "./Map";
import Point from "./Point";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

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
        <>
            <h1>extent</h1>
            <p>
                Use the
                <span style={{ fontStyle: "italic" }}>onViewChange</span> prop
                to listen to changes in the map extent
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

                {extent && (
                    <ul style={{ fontFamily: "monospace" }}>
                        <li>
                            {new Point(extent.west, extent.south).toString()}
                        </li>
                        <li>
                            {new Point(extent.east, extent.north).toString()}
                        </li>
                    </ul>
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
                <ReactSyntaxHighlighter language="typescript" style={agate}>
                    {
                        'import React from "react";\nimport Map from "react-map";\nimport Point from "./Point";\n\ntype _Extent = { north: number; south: number; east: number; west: number };\n\nfunction Extent() {\n    const [extent, setExtent] = React.useState<_Extent | undefined>(undefined);\n    \n    const handleMapViewChange = React.useCallback((extent: _Extent, _: any) => {\n        setExtent(extent);\n    }, []);\n    \n    return (\n        <>\n            <Map onViewChange={handleMapViewChange} />\n            {extent && (\n                <ul>\n                    <li>{new Point(extent.west, extent.south).toString()}</li>\n                    <li>{new Point(extent.east, extent.north).toString()}</li>\n                </ul>\n            )}\n        </>\n    );\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default Extent;
