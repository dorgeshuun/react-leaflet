import Map from "./Map";
import dog from "./assets/dog.png";
import cat from "./assets/cat.png";
import pig from "./assets/pig.png";

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
                points={points}
                basemapProviderUrl="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
            />
        </div>
    );
}

export default Animals;
