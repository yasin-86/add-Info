const signupForm = document.querySelector("#signupForm");
const studentList = [];
const tableBody = document.querySelector("#tableBody");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const newStudent = {
    studentName: e.target.studentName.value,
    studentLastname: e.target.studentLastname.value,
    fatherName: e.target.fatherName.value,
    age: e.target.age.value,
    grade: e.target.grade.value,
  };

  if (newStudent.studentName === "" || newStudent.studentLastname === "" || newStudent.fatherName === "" || newStudent.age === "" || newStudent.grade === "") {
    alert("لطفا تمام فیلد هارا پر کنید");
    return;
  }

  e.target.studentName.value = "";
  e.target.studentLastname.value = "";
  e.target.fatherName.value = "";
  e.target.age.value = "";
  e.target.grade.value = "";

  studentList.push(newStudent);
  renderInUI(studentList, tableBody);
});

function renderInUI(list, container) {
  container.innerHTML = "";
  list.forEach((value) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${value.studentName}</td>
      <td>${value.studentLastname}</td>
      <td>${value.fatherName}</td>
      <td>${value.age}</td>
      <td>${value.grade}</td>
      <td>
        <i class="fas fa-trash"></i>
      </td>
    `;

    container.appendChild(tr);
  });
}

// tableBody.addEventListener("click", (e) => {
//     if (e.target.classList.contains("fa-trash")) {
//         e.target.parentElement.parentElement.remove();
//     }
// });

tableBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-trash")) {
        const tr = e.target.closest("tr");
        const index = tr.rowIndex - 1;

        studentList.splice(index, 1);
        tr.remove();
    }
});

