const signupForm = document.querySelector("#signupForm");
const studentList = JSON.parse(localStorage.getItem("students")) || [];
const tableBody = document.querySelector("#tableBody");
const studentNameInput = document.querySelector("#studentName");
const studentLastnameInput = document.querySelector("#studentLastname");
const fatherNameInput = document.querySelector("#fatherName");
const gradeInput = document.querySelector("#grade");
const searchBox = document.querySelector(".searchBox");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudent = {
    studentName: e.target.studentName.value,
    studentLastname: e.target.studentLastname.value,
    fatherName: e.target.fatherName.value,
    age: e.target.age.value,
    grade: e.target.grade.value,
    id: generateUniqueId(),
  };

  
  if (
    newStudent.studentName === "" ||
    newStudent.studentLastname === "" ||
    newStudent.fatherName === "" ||
    newStudent.age === "" ||
    newStudent.grade === ""
  ) {
    alert("لطفا تمام فیلد هارا پر کنید");
    return;
  }

  e.target.studentName.value = "";
  e.target.studentLastname.value = "";
  e.target.fatherName.value = "";
  e.target.age.value = "";
  e.target.grade.value = "";

  studentList.push(newStudent);

  localStorage.setItem("students" , JSON.stringify(studentList) );

  renderInUI(studentList, tableBody);
});

function renderInUI(list, container) {
  container.innerHTML = " ";
  list.forEach((value) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${value.studentName}</td>
      <td>${value.studentLastname}</td>
      <td>${value.fatherName}</td>
      <td>${value.age}</td>
      <td>${value.grade}</td>
      <td>
        <i class="fas fa-trash" id="${value.id}"></i> 
      </td>
    `;

    container.appendChild(tr);
  });
}

function preventNumberInput(event) {
  const charCode = event.which ? event.which : event.keyCode;
  if (charCode >= 48 && charCode <= 57) {
    event.preventDefault();
  }
}

if (studentNameInput) {
  studentNameInput.addEventListener("keypress", preventNumberInput);}
if (studentLastnameInput) {
  studentLastnameInput.addEventListener("keypress", preventNumberInput);}
if (fatherNameInput) {
  fatherNameInput.addEventListener("keypress", preventNumberInput);}
  if (gradeInput) {
  gradeInput.addEventListener("keypress", preventNumberInput);}

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    const clickedId = e.target.id;

    console.log(clickedId);

    const newStudentList = studentList.filter((student) => student.id !== clickedId);
 
    studentList.length = 0;
    studentList.push(...newStudentList);
    localStorage.setItem("students" , JSON.stringify(studentList) );

    renderInUI(studentList, tableBody);
  }
});

function generateUniqueId() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

searchBox.addEventListener("input", (e) => {
  const KeyWord = e.target.value;

  const finalResult = studentList.filter(
    (user) =>
      user.studentName.includes(KeyWord) ||
      user.studentLastname.includes(KeyWord)
  );

  renderInUI(finalResult, tableBody);
});

renderInUI(studentList, tableBody);



