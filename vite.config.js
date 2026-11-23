import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    // relative paths, so the built app also works from a sub folder (e.g. GitHub Pages)
    base: "./"
});
