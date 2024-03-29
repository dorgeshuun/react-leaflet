import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), dts({ rollupTypes: true })],
    build: {
        lib: {
            entry: "src/Map.tsx",
            name: "reactLeaflet",
            fileName: "react-leaflet",
        },
        rollupOptions: {
            external: ["react", "leaflet"],
            output: {
                globals: {
                    react: "React",
                    leaflet: "Leaflet",
                },
                banner: "import 'leaflet/dist/leaflet.css';",
            },
        },
        outDir: "dist-lib",
    },
});
