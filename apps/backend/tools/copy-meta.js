const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const dist = path.resolve(root, "../../dist/apps/backend");
const src = path.resolve(root, "src");

// Copy host.json
fs.copyFileSync(path.join(root, "host.json"), path.join(dist, "host.json"));

// Recursively copy all function.json files
function copyFunctionJsonFiles(current = src, rel = "") {
  const items = fs.readdirSync(current);

  for (const item of items) {
    const absPath = path.join(current, item);
    const relPath = path.join(rel, item);
    const stat = fs.statSync(absPath);

    if (stat.isDirectory()) {
      copyFunctionJsonFiles(absPath, relPath);
    } else if (item === "function.json") {
      const destDir = path.join(dist, rel);
      fs.mkdirSync(destDir, { recursive: true });
      fs.copyFileSync(absPath, path.join(destDir, item));
    }
  }
}

copyFunctionJsonFiles();
console.log("✅ Copied host.json and all function.json files.");
