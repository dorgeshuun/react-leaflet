import React from "react";
import Map from "./Map";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

const basemaps = [
    {
        id: "uk",
        title: "UK",
        url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
    },
    {
        id: "de",
        title: "DE",
        url: "https://tile.openstreetmap.de/{z}/{x}/{y}.png",
    },
    {
        id: "fr",
        title: "FR",
        url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png",
    },
];

function Basemap() {
    const [selected, setSelected] = React.useState("uk");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id;
        setSelected(id);
    };

    return (
        <>
            <h1>basemap</h1>
            <p>
                Set the{" "}
                <span style={{ fontStyle: "italic" }}>basemapProviderUrl</span>{" "}
                prop to specify what basemap to use.
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
                    basemapProviderUrl={
                        basemaps.find((b) => b.id === selected)?.url
                    }
                />

                <form>
                    {basemaps.map((b) => (
                        <div
                            key={b.id}
                            style={{
                                margin: 10,
                                fontFamily: "monospace",
                                fontSize: 15,
                            }}
                        >
                            <input
                                type="radio"
                                id={b.id}
                                name={"basemaps"}
                                value={b.title}
                                checked={b.id === selected}
                                onChange={handleChange}
                            />
                            <label htmlFor={b.id}>{b.title}</label>
                            <br />
                        </div>
                    ))}
                </form>
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
                        'import React from "react";\nimport Map from "react-leaflet";\n\nconst basemaps = [\n    { id: "uk", title: "UK", url: "https://tile.openstreetmap.org/{z}/{x}/{y}.png" },\n    { id: "de", title: "DE", url: "https://tile.openstreetmap.de/{z}/{x}/{y}.png" },\n    { id: "fr", title: "FR", url: "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png" },\n];\n\nfunction Basemap() { \n    const [selected, setSelected] = React.useState("uk");\n\n    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {\n        const id = e.target.id;\n        setSelected(id);\n    };\n\n    return (\n        <>\n            <Map basemapProviderUrl={basemaps.find((b) => b.id === selected)?.url} />\n            <form>\n                {basemaps.map((b) => (\n                    <div key={b.id}>\n                        <input\n                            type="radio"\n                            id={b.id}\n                            name="basemaps"\n                            value={b.title}\n                            checked={b.id === selected}\n                            onChange={handleChange}\n                        />\n                        <label htmlFor={b.id}>{b.title}</label>\n                        <br />\n                    </div>\n                )}\n            </form>\n        </>\n    );\n}'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default Basemap;
