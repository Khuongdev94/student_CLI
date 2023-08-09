const readlineSync = require("readline-sync");
const students = [];

function showOption() {
  console.log("1. show students");
  console.log("2. create student");
  console.log("1. save & exit");
}

function showStudents() {}

function addStudents() {}

function saveAndExit() {}

function run() {
  showOption();
  const input = readlineSync.question(" > ");
  switch (input) {
    case "1":
      showStudents();
      break;
    case "2":
      addStudents();
      break;
    case "3":
      saveAndExit();
      break;
    default:
      console.log("wrong input");
      break;
  }
}
run();
