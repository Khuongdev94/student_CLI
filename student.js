const readlineSync = require("readline-sync");
const fs = require("fs");
let students = [];

function loadData() {
  const data = fs.readFileSync("./data.json");
  students = JSON.parse(data);
}

function showOption() {
  console.log("1. show students");
  console.log("2. create a student");
  console.log("3. save & exit");
  console.log("4. delete student");
  console.log("5. edit student");

  const input = readlineSync.question(" > ");
  switch (input) {
    case "1":
      showStudents();
      showOption();
      break;
    case "2":
      addStudents();
      showOption();
      break;
    case "3":
      saveAndExit();
      break;
    case "4":
      deleteStudent();
      break;
    case "5":
      editStudent();
      showOption();
      break;
    default:
      console.log("wrong input");
      showOption();
      break;
  }
}

function showStudents() {
  for (let student of students) {
    console.log(student.name, student.age);
  }
}

function addStudents() {
  const name = readlineSync.question("name: ");
  const age = readlineSync.question("age: ");
  const student = { name: name, age: Number(age) };
  students.push(student);
}

function saveAndExit() {
  const addData = JSON.stringify(students);
  fs.writeFileSync("./data.json", addData, { encoding: "utf-8" });
}

function editStudent() {
  const editStudent = readlineSync.question("nameEdit: ");
  const updateStudent = students.find((item) => item.name === editStudent);
  updateStudent.name = readlineSync.question("nameUpdate: ");
  const age = readlineSync.question("ageUpdate: ");
  updateStudent.age = Number(age);
  saveAndExit();
}

function deleteStudent() {
  const deleteStudent = readlineSync.question("nameDelete: ");
  const itemDelete = students.find((item) => item.name === deleteStudent);
  students.splice(students.indexOf(itemDelete), 1);
  saveAndExit();
}

function run() {
  loadData();
  showOption();
  saveAndExit();
}
run();
