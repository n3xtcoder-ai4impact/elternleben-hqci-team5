const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../../dist/apps/backend");

if (fs.existsSync(distPath)) {
  fs.rmSync(distPath, { recursive: true, force: true });
  console.log(`🧹 Cleaned dist: ${distPath}`);
} else {
  console.log(`ℹ️ Nothing to clean: ${distPath}`);
}
