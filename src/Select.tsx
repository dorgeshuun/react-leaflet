import React from "react";
import Map from "./Map";

const points = [
    {
        id: "#1",
        lng: -0.0761,
        lat: 51.50807,
        title: "hello world",
    },
    {
        id: "#2",
        lng: -0.10334,
        lat: 51.51515,
        title: "goodbye world",
    },
    {
        id: "#3",
        lng: -0.08755,
        lat: 51.5018,
        title: "whatever",
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
                points={_pts}
                onSelect={handleSelect}
                onClickaway={handleClickaway}
            />

            <div style={{ color: "whitesmoke", fontFamily: "monospace" }}>
                {points.find((p) => p.id === selected)?.title}
            </div>
        </div>
    );
}

export default Select;
