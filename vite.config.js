import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  jsx: {
    factory: "React.createElement",
    fragment: "React.Fragment",
    throwIfNamespace: false,
  },
});
