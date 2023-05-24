// vite.config.js
import { defineConfig } from "file:///C:/Users/Cefalo/Downloads/Blog-station-frontend/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/Cefalo/Downloads/Blog-station-frontend/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  // server: {
  //   proxy: {
  //     // '/api': 'http://192.168.1.92:3000',
  //     '/api': "https://blogstation.onrender.com/"
  //   },
  // },
  // plugins: [react()],
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxDZWZhbG9cXFxcRG93bmxvYWRzXFxcXEJsb2ctc3RhdGlvbi1mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcQ2VmYWxvXFxcXERvd25sb2Fkc1xcXFxCbG9nLXN0YXRpb24tZnJvbnRlbmRcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0NlZmFsby9Eb3dubG9hZHMvQmxvZy1zdGF0aW9uLWZyb250ZW5kL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIC8vIHNlcnZlcjoge1xyXG4gIC8vICAgcHJveHk6IHtcclxuICAvLyAgICAgLy8gJy9hcGknOiAnaHR0cDovLzE5Mi4xNjguMS45MjozMDAwJyxcclxuICAvLyAgICAgJy9hcGknOiBcImh0dHBzOi8vYmxvZ3N0YXRpb24ub25yZW5kZXIuY29tL1wiXHJcbiAgLy8gICB9LFxyXG4gIC8vIH0sXHJcbiAgLy8gcGx1Z2luczogW3JlYWN0KCldLFxyXG5cclxuICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgdGVzdDoge1xyXG4gICAgZ2xvYmFsczogdHJ1ZSxcclxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxyXG4gICAgc2V0dXBGaWxlczogJy4vc2V0dXBUZXN0cy5qcycsXHJcbiAgfVxyXG59KVxyXG5cclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VSxTQUFTLG9CQUFvQjtBQUN0VyxPQUFPLFdBQVc7QUFDbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsTUFBTTtBQUFBLElBQ0osU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsWUFBWTtBQUFBLEVBQ2Q7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
