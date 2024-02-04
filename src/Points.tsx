import Map from "./Map";

const points = [{ id: "#1", lng: -0.0761, lat: 51.50807 }];

function Points() {
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
            <Map style={{ borderRadius: 10 }} points={points} />
        </div>
    );
}

export default Points;
