import Map from "./Map";

function SimpleMap() {
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
            <Map style={{ borderRadius: 10 }} />
        </div>
    );
}

export default SimpleMap;
