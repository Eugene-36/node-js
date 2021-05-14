const fs = require("fs/promises");
const { writeFile } = require("node:fs");

const file = "../03/main.js";

(async (fileName) => {
  const file = await fs.readFile(fileName, "utf-8");
  await fs.writeFile("temp.js", `${file} console.log('Hello')`);
})(file);
