import React from "react";
import Map from "./Map";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

const points = [
    {
        id: "#1",
        lng: -0.0761,
        lat: 51.50807,
        text: "hello world",
    },
    {
        id: "#2",
        lng: -0.10334,
        lat: 51.51515,
        text: "goodbye world",
    },
    {
        id: "#3",
        lng: -0.08755,
        lat: 51.5018,
        text: "whatever",
    },
];

function Select() {
    const [selected, setSelected] = React.useState("none");

    const handleSelect = React.useCallback((id: string) => {
        setSelected(id);
    }, []);

    const handleClickaway = React.useCallback(() => {
        setSelected("none");
    }, []);

    const _pts = points.map((p) =>
        p.id === selected ? { ...p, color: "tomato" } : p
    );

    return (
        <>
            <h1>select</h1>
            <p>
                Listen to clicks on point markers with the
                <span style={{ fontStyle: "italic" }}>onSelect</span> prop. An
                <span style={{ fontStyle: "italic" }}>onClickaway</span> prop is
                also available
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
                    points={_pts}
                    onSelect={handleSelect}
                    onClickaway={handleClickaway}
                />

                <div style={{ fontFamily: "monospace" }}>
                    {points.find((p) => p.id === selected)?.text}
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
                        'import React from "react";\nimport Map from "react-map";\n\nconst points = [\n    { id: "#1", lng: -0.07610, lat: 51.50807, text: "hello world" },\n    { id: "#2", lng: -0.10334, lat: 51.51515, text: "goodbye world" },\n    { id: "#3", lng: -0.08755, lat: 51.50180, text: "whatever" },\n];\n\nfunction Select() {\n    const [selected, setSelected] = React.useState("none");\n\n    const handleSelect = React.useCallback((id: string) => {\n        setSelected(id);\n    }, []);\n\n    const handleClickaway = React.useCallback(() => {\n        setSelected("none");\n    }, []);\n\n    const _pts = points.map((p) =>\n        p.id === selected ? { ...p, color: "tomato" } : p\n    );\n\n    return (\n        <>\n            <Map\n                points={_pts}\n                onSelect={handleSelect}\n                onClickaway={handleClickaway}\n            />\n            <div>{points.find((p) => p.id === selected)?.text}</div>\n        </>\n    );\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default Select;
