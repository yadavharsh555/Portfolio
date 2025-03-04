export default defineConfig({
    build: {
      rollupOptions: {
        external: ["missing-package-name"]
      }
    }
  });
  