// vite.config.mts
import { resolve } from "path";
import { defineConfig } from "file:///C:/Users/DESKTOP/project/bunney-ui/node_modules/vite/dist/node/index.js";
import svgr from "file:///C:/Users/DESKTOP/project/bunney-ui/node_modules/vite-plugin-svgr/dist/index.js";
import react from "file:///C:/Users/DESKTOP/project/bunney-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///C:/Users/DESKTOP/project/bunney-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import commonjs from "file:///C:/Users/DESKTOP/project/bunney-ui/node_modules/vite-plugin-commonjs/dist/index.mjs";
var __vite_injected_original_dirname = "C:\\Users\\DESKTOP\\project\\bunney-ui";
var vite_config_default = defineConfig({
  build: {
    outDir: "dist",
    lib: {
      entry: {
        root: resolve(__vite_injected_original_dirname, "src/index.ts"),
        Bunney: resolve(__vite_injected_original_dirname, "src/Bunney/index.ts"),
        AnimatedBunney: resolve(
          __vite_injected_original_dirname,
          "src/AnimatedBunney/index.ts"
        ),
        Logo: resolve(__vite_injected_original_dirname, "src/Logo/index.ts"),
        TechBunney: resolve(__vite_injected_original_dirname, "src/TechBunney/index.ts"),
        SmileyBunney: resolve(__vite_injected_original_dirname, "src/SmileyBunney/index.ts"),
        Mackey: resolve(__vite_injected_original_dirname, "src/Mackey/index.ts")
      },
      name: "bunney-ui",
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      output: {
        exports: "named"
      },
      external: ["@emotion/styled", "@emotion/react"]
    },
    sourcemap: true
  },
  resolve: {
    alias: [
      { find: "@", replacement: resolve(__vite_injected_original_dirname, "src") },
      { find: "@/*", replacement: resolve(__vite_injected_original_dirname, "src/*") },
      {
        find: "@/common",
        replacement: resolve(__vite_injected_original_dirname, "src/common")
      },
      {
        find: "@/common/*",
        replacement: resolve(__vite_injected_original_dirname, "src/common/*")
      }
    ]
  },
  plugins: [
    react(),
    svgr(),
    commonjs(),
    dts({
      insertTypesEntry: true
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubXRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcREVTS1RPUFxcXFxwcm9qZWN0XFxcXGJ1bm5leS11aVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcREVTS1RPUFxcXFxwcm9qZWN0XFxcXGJ1bm5leS11aVxcXFx2aXRlLmNvbmZpZy5tdHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0RFU0tUT1AvcHJvamVjdC9idW5uZXktdWkvdml0ZS5jb25maWcubXRzXCI7aW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gJ3BhdGgnXHJcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCBzdmdyIGZyb20gJ3ZpdGUtcGx1Z2luLXN2Z3InXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXHJcbmltcG9ydCBjb21tb25qcyBmcm9tICd2aXRlLXBsdWdpbi1jb21tb25qcydcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBidWlsZDoge1xyXG4gICAgICAgIG91dERpcjogJ2Rpc3QnLFxyXG4gICAgICAgIGxpYjoge1xyXG4gICAgICAgICAgICBlbnRyeToge1xyXG4gICAgICAgICAgICAgICAgcm9vdDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgICAgIEJ1bm5leTogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvQnVubmV5L2luZGV4LnRzJyksXHJcbiAgICAgICAgICAgICAgICBBbmltYXRlZEJ1bm5leTogcmVzb2x2ZShcclxuICAgICAgICAgICAgICAgICAgICBfX2Rpcm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NyYy9BbmltYXRlZEJ1bm5leS9pbmRleC50cydcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBMb2dvOiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9Mb2dvL2luZGV4LnRzJyksXHJcbiAgICAgICAgICAgICAgICBUZWNoQnVubmV5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9UZWNoQnVubmV5L2luZGV4LnRzJyksXHJcbiAgICAgICAgICAgICAgICBTbWlsZXlCdW5uZXk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL1NtaWxleUJ1bm5leS9pbmRleC50cycpLFxyXG4gICAgICAgICAgICAgICAgTWFja2V5OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9NYWNrZXkvaW5kZXgudHMnKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmFtZTogJ2J1bm5leS11aScsXHJcbiAgICAgICAgICAgIGZvcm1hdHM6IFsnZXMnLCAnY2pzJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZXhwb3J0czogJ25hbWVkJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXh0ZXJuYWw6IFsnQGVtb3Rpb24vc3R5bGVkJywgJ0BlbW90aW9uL3JlYWN0J10sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiBbXHJcbiAgICAgICAgICAgIHsgZmluZDogJ0AnLCByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSB9LFxyXG4gICAgICAgICAgICB7IGZpbmQ6ICdALyonLCByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvKicpIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbmQ6ICdAL2NvbW1vbicsXHJcbiAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvY29tbW9uJyksXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGZpbmQ6ICdAL2NvbW1vbi8qJyxcclxuICAgICAgICAgICAgICAgIHJlcGxhY2VtZW50OiByZXNvbHZlKF9fZGlybmFtZSwgJ3NyYy9jb21tb24vKicpLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgcGx1Z2luczogW1xyXG4gICAgICAgIHJlYWN0KCksXHJcbiAgICAgICAgc3ZncigpLFxyXG4gICAgICAgIGNvbW1vbmpzKCksXHJcbiAgICAgICAgZHRzKHtcclxuICAgICAgICAgICAgaW5zZXJ0VHlwZXNFbnRyeTogdHJ1ZSxcclxuICAgICAgICB9KSxcclxuICAgIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBb1MsU0FBUyxlQUFlO0FBQzVULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFdBQVc7QUFDbEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sY0FBYztBQUxyQixJQUFNLG1DQUFtQztBQVF6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUN4QixPQUFPO0FBQUEsSUFDSCxRQUFRO0FBQUEsSUFDUixLQUFLO0FBQUEsTUFDRCxPQUFPO0FBQUEsUUFDSCxNQUFNLFFBQVEsa0NBQVcsY0FBYztBQUFBLFFBQ3ZDLFFBQVEsUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxRQUNoRCxnQkFBZ0I7QUFBQSxVQUNaO0FBQUEsVUFDQTtBQUFBLFFBQ0o7QUFBQSxRQUNBLE1BQU0sUUFBUSxrQ0FBVyxtQkFBbUI7QUFBQSxRQUM1QyxZQUFZLFFBQVEsa0NBQVcseUJBQXlCO0FBQUEsUUFDeEQsY0FBYyxRQUFRLGtDQUFXLDJCQUEyQjtBQUFBLFFBQzVELFFBQVEsUUFBUSxrQ0FBVyxxQkFBcUI7QUFBQSxNQUNwRDtBQUFBLE1BQ0EsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLElBQ3pCO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDWCxRQUFRO0FBQUEsUUFDSixTQUFTO0FBQUEsTUFDYjtBQUFBLE1BQ0EsVUFBVSxDQUFDLG1CQUFtQixnQkFBZ0I7QUFBQSxJQUNsRDtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE9BQU87QUFBQSxNQUNILEVBQUUsTUFBTSxLQUFLLGFBQWEsUUFBUSxrQ0FBVyxLQUFLLEVBQUU7QUFBQSxNQUNwRCxFQUFFLE1BQU0sT0FBTyxhQUFhLFFBQVEsa0NBQVcsT0FBTyxFQUFFO0FBQUEsTUFDeEQ7QUFBQSxRQUNJLE1BQU07QUFBQSxRQUNOLGFBQWEsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDaEQ7QUFBQSxNQUNBO0FBQUEsUUFDSSxNQUFNO0FBQUEsUUFDTixhQUFhLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ2xEO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxJQUNMLFNBQVM7QUFBQSxJQUNULElBQUk7QUFBQSxNQUNBLGtCQUFrQjtBQUFBLElBQ3RCLENBQUM7QUFBQSxFQUNMO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
