import { defineConfig } from "vite";

export default defineConfig({
  root: "./public", // Укажите правильную директорию
  server: {
    port: 4200, // Указываем порт 4200
    open: true, // Автоматически открывать браузер
  },
});
