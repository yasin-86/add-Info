const signupForm = document.querySelector("#signupForm");
const studentList = [];
const tableBody = document.querySelector("#tableBody");

signupForm.addEventListener("submit",(e)=>{
e.preventDefault();
    const newStudent = {
        studentName : e.target.studentName.value,
        studentLastname : e.target.studentLastname.value,
        fatherName : e.target.fatherName.value,
        age : e.target.age.value,
        grade : e.target.grade.value,
    }

    e.target.studentName.value = ""
    e.target.studentLastname.value = ""
    e.target.fatherName.value = ""
    e.target.age.value = ""
    e.target.grade.value = ""

    studentList.push(newStudent)
    renderInUI(studentList,tableBody)
})

function renderInUI(list,container){
    container.innerHTML = ""
    list.forEach((value)=>{
        const tr = document.createElement("tr");
        tr.innerHTML = ` <td>${value.studentName}</td>
                         <td>${value.studentLastname}</td>
                         <td>${value.fatherName}</td>
                         <td>${value.age}</td>
                         <td>${value.grade}</td> `


        console.log(value)
        console.log(tr)

        container.appendChild(tr)
    })
}