const readlineSync = require("readline-sync");
const fs = require("fs");
let students = [];

function loadData() {
  const data = fs.readFileSync("./data.json");
  students = JSON.parse(data);
}

function showOption() {
  console.log("1. show students");
  console.log("2. create student");
  console.log("1. save & exit");
}

function showStudents() {}

function addStudents() {}

function saveAndExit() {}

function run() {
  loadData();
  console.log(students);
  //   showOption();
  //   const input = readlineSync.question(" > ");
  //   switch (input) {
  //     case "1":
  //       showStudents();
  //       break;
  //     case "2":
  //       addStudents();
  //       break;
  //     case "3":
  //       saveAndExit();
  //       break;
  //     default:
  //       console.log("wrong input");
  //       break;
  //   }
}
run();
