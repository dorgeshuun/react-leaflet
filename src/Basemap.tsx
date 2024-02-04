import React from "react";
import Map from "./Map";

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
        <div
            style={{
                width: 800,
                height: 500,
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
                            color: "whitesmoke",
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
    );
}

export default Basemap;
