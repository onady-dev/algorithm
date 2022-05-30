const fs = require("fs");
const input = (process.platform === "linux" ?
    fs.readFileSync("/dev/stdin").toString() :
    ``).trim().split("\n");
