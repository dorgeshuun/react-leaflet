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
                    background: "#242124",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
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
                    <Animals />,
                ].map((e) => (
                    <>
                        {e}
                        <hr style={{ width: "calc(100vw - 30%)" }} />
                    </>
                ))}
            </div>
        </>
    );
}

export default App;
