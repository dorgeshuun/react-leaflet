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
                <SimpleMap />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Basemap />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Click />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Hover />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Extent />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Tiles />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Points />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <Select />
                <hr style={{ width: "calc(100vw - 30%)" }} />
                <ControlExtent />
            </div>
        </>
    );
}

export default App;
