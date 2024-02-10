import "./App.css";
import SimpleMap from "./SimpleMap";
import Click from "./Click";
import Hover from "./Hover";
import Extent from "./Extent";
import Tiles from "./Tiles";
import Points from "./Points";
import Select from "./Select";
import ControlExtent from "./ControlExtent";
import Basemap from "./Basemap";
import Animals from "./Animals";

function App() {
    return (
        <>
            <div
                style={{
                    width: "100vw",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <span style={{ margin: 40 }}>
                    <p>Install this library using yarn with the command</p>
                    <div
                        style={{
                            background: "lightgray",
                            width: 500,
                            height: 100,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        yarn add https://github.com/dorgeshuun/react-leaflet
                    </div>
                    <p style={{ maxWidth: 500 }}>
                        As of yet, this library does not support{" "}
                        <span style={{ fontStyle: "italic" }}>Strict</span>{" "}
                        mode.
                    </p>
                </span>
                <hr style={{ width: "calc(100vw - 30%)" }} />
                {[
                    <SimpleMap />,
                    <Basemap />,
                    <Click />,
                    <Hover />,
                    <Extent />,
                    <Tiles />,
                    <Points />,
                    <Select />,
                    <ControlExtent />,
                ].map((e) => (
                    <>
                        {e}
                        <hr style={{ width: "calc(100vw - 30%)" }} />
                    </>
                ))}
                <Animals />
            </div>
        </>
    );
}

export default App;
