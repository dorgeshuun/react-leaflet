import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        lib: {
            entry: "src/Map.tsx",
            name: "reactLeaflet",
            fileName: "react-leaflet",
        },
        rollupOptions: {
            external: ["react", "leaflet", "uuid"],
            output: {
                globals: {
                    react: "React",
                    leaflet: "Leaflet",
                    uuid: "Uuid",
                },
                banner: "import 'leaflet/dist/leaflet.css';",
            },
        },
    },
});
