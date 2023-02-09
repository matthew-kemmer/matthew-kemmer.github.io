import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      // This is needed, or else Vite will try to find image paths (which it wont be able to find because this will be called on the web, not directly)
      // For example <img src="/images/logo.png"> will not work without the code below
      template: {
          transformAssetUrls: {
              includeAbsolute: false,
          },
      },
    }),
    //svgLoader(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
	// build: {
  //   rollupOptions: {
  //     external: [
  //       /^shared:.*/,
  //     ]
  //   }
  // }
});
