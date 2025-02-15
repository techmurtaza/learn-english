import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
    },
    server: {
        host: "0.0.0.0", // Listen on all network interfaces
        port: 5173, // Ensure this port is open and exposed
        cors: {
            origin: 'http://learn-english.dvl.to',
            credentials: true,
        },
        // Use the actual hostname or IP address accessible from the browser
        hmr: {
            host: "localhost", // or 'your-dev-domain.test' if using a custom domain
            port: 5173,
        },
    },
});
