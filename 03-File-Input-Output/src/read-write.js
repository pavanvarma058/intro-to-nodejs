import fs from "node:fs";
const path = "./package.json";

// Asynchronous read
// fs.readFile(path, "utf-8", (err, data) => {
//   if (err) {
//     console.error(err);
//     return;
//   }
//   console.log(JSON.parse(data));
// });

// Synchronous read
// console.log(JSON.parse(fs.readFileSync(path, "utf-8")));

// writing to a file
fs.writeFile("hello.txt", "Hey wassup", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("File written successfully");
});
