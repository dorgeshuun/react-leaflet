import Map from "./Map";
import SyntaxHighLighter from "react-syntax-highlighter";
import agate from "react-syntax-highlighter/dist/esm/styles/hljs/agate";

function SimpleMap() {
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
            <h1>simple map</h1>
            <p style={{ maxWidth: 750 }}>
                A basic component that displays a map.
            </p>
            <div style={{ margin: 20 }}>
                <Map style={{ borderRadius: 10 }} />
            </div>
            <div
                style={{
                    margin: 20,
                    borderRadius: 10,
                    padding: 10,
                    width: 400,
                    background: "#333333",
                }}
            >
                <SyntaxHighLighter language="typescript" style={agate}>
                    {
                        'import Map from "react-leaflet";\n\nfunction SimpleMap() { \n    return <Map />; \n}'
                    }
                </SyntaxHighLighter>
            </div>
            <p style={{ maxWidth: 750 }}>
                The map canvas is rendered on a{" "}
                <span style={{ fontStyle: "italic" }}>div</span> element. The{" "}
                <span style={{ fontStyle: "italic" }}>style</span> prop of Map
                will be passed to that{" "}
                <span style={{ fontStyle: "italic" }}>div</span> element. Resize
                the map by setting the{" "}
                <span style={{ fontStyle: "italic" }}>width</span> and{" "}
                <span style={{ fontStyle: "italic" }}>height</span> style
                properties. To make the map take up all the window space, set{" "}
                <span style={{ fontStyle: "italic" }}>width</span> to{" "}
                <span style={{ fontStyle: "italic" }}>100vw</span> and{" "}
                <span style={{ fontStyle: "italic" }}>height</span> to{" "}
                <span style={{ fontStyle: "italic" }}>100vh</span>. You may need
                to override the margin of the{" "}
                <span style={{ fontStyle: "italic" }}>body</span> element by
                setting it to <span style={{ fontStyle: "italic" }}>0</span>.
            </p>
            <p style={{ maxWidth: 750 }}>
                By default, the map will be centered around the city of London.
                You can change that by setting the{" "}
                <span style={{ fontStyle: "italic" }}>initialView</span> prop
                with an object with{" "}
                <span style={{ fontStyle: "italic" }}>lng</span>,{" "}
                <span style={{ fontStyle: "italic" }}>lat</span> and{" "}
                <span style={{ fontStyle: "italic" }}>zoom</span> number
                properties.
            </p>
        </div>
    );
}

export default SimpleMap;
