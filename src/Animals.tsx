import Map from "./Map";
import dog from "./assets/dog.png";
import cat from "./assets/cat.png";
import pig from "./assets/pig.png";
import ReactSyntaxHighlighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

const points = [
    {
        id: "#1",
        lng: -0.0761,
        lat: 51.50807,
        title: "woof",
        icon: dog,
        color: "mediumseagreen",
    },
    {
        id: "#2",
        lng: -0.10334,
        lat: 51.51515,
        title: "meow",
        icon: cat,
        color: "dodgerblue",
    },
    {
        id: "#3",
        lng: -0.08755,
        lat: 51.5018,
        title: "oink",
        icon: pig,
        color: "pink",
    },
];

function Animals() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: 40,
            }}
        >
            <h1>animals</h1>
            <p>
                you can also add icons, colors and labels to your markers by
                setting the icon, title and color field on each point. the icon
                field will point to an image file in your assets folder.
            </p>
            <div style={{ margin: 20 }}>
                <Map
                    style={{ borderRadius: 10 }}
                    points={points}
                    basemapProviderUrl="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
                />
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
                        'import Map from "react-leaflet";\nimport dog from "./assets/dog.png";\nimport cat from "./assets/cat.png";\nimport pig from "./assets/pig.png";\n\nconst BASEMAP = "https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png";\n\nconst points = [\n    {\n        id: "#1",\n        lng: -0.07610,\n        lat: 51.50807,\n        title: "woof",\n        icon: dog,\n        color: "mediumseagreen",\n    },\n    {\n        id: "#2",\n        lng: -0.10334,\n        lat: 51.51515,\n        title: "meow",\n        icon: cat,\n        color: "dodgerblue",\n    },\n    {\n        id: "#3",\n        lng: -0.08755,\n        lat: 51.50180,\n        title: "oink",\n        icon: pig,\n        color: "pink",\n    },\n];\n\nfunction Animals() {\n    return <Map points={points} basemapProviderUrl={BASEMAP} />;\n}\n'
                    }
                </ReactSyntaxHighlighter>
            </div>
        </div>
    );
}

export default Animals;
