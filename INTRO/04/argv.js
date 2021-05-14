//const { argv } = require("node:process");

const fs = require("fs/promises");

const argv = process.argv;
(async () => {
  const data = await fs.readFile("data.json", "utf-8");
  const content = JSON.parse(data);

  if (argv[2] === "--list") {
    console.table(content);
  } else {
    const name = argv[2];
    const age = argv[3];
    content.push({ name, age });
    await fs.writeFile("data.json", JSON.stringify(content, null, 2));
  }
})();
