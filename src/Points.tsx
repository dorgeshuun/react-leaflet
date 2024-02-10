import ReactSyntaxHighlighter from "react-syntax-highlighter";
import Map from "./Map";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

const points = [{ id: "#1", lng: -0.0761, lat: 51.50807 }];

function Points() {
    return (
        <>
            <h1>points</h1>
            <p>
                Use the <span style={{ fontStyle: "italic" }}>points</span> prop
                to display points on the map. Be sure to give a unique id to
                each point like you would do with list items.
            </p>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    margin: 40,
                    width: 800,
                }}
            >
                <Map style={{ borderRadius: 10 }} points={points} />
            </div>
            <div
                style={{
                    margin: 20,
                    borderRadius: 10,
                    padding: 10,
                    width: 500,
                    background: "#333333",
                }}
            >
                <ReactSyntaxHighlighter language="typescript" style={agate}>
                    {
                        'import Map from "react-leaflet";\n\nconst points = [{ id: "#1", lng: -0.0761, lat: 51.50807 }];\n\nfunction Points() {\n    return <Map points={points} />\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </>
    );
}

export default Points;
