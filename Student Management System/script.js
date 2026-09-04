// Get HTML elements

const form = document.getElementById("studentForm");

const nameInput = document.getElementById("name");
const rollInput = document.getElementById("roll");
const courseInput = document.getElementById("course");
const marksInput = document.getElementById("marks");

const searchInput = document.getElementById("search");

const tableBody = document.getElementById("studentTable");

const totalStudents = document.getElementById("totalStudents");
const averageMarks = document.getElementById("averageMarks");

const submitBtn = document.getElementById("submitBtn");


// Student Array

let students = JSON.parse(localStorage.getItem("students")) || [];


// Edit Index

let editIndex = -1;


// Calculate Grade

function getGrade(marks) {

    if (marks >= 90) {
        return "A+";
    }
    else if (marks >= 80) {
        return "A";
    }
    else if (marks >= 70) {
        return "B";
    }
    else if (marks >= 60) {
        return "C";
    }
    else if (marks >= 50) {
        return "D";
    }
    else {
        return "F";
    }
}


// Save Students

function saveStudents() {

    localStorage.setItem(
        "students",
        JSON.stringify(students)
    );

}


// Display Students

function displayStudents(list = students) {

    tableBody.innerHTML = "";


    // If no student

    if (list.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="6" class="empty">
                    No students found
                </td>
            </tr>
        `;

    }

    else {

        list.forEach(function(student) {

            // Find original index
            const index = students.indexOf(student);

            const row = document.createElement("tr");

            row.innerHTML = `

                <td>${student.roll}</td>

                <td>${student.name}</td>

                <td>${student.course}</td>

                <td>${student.marks}</td>

                <td>${getGrade(student.marks)}</td>

                <td>

                    <button
                        class="action-btn edit"
                        onclick="editStudent(${index})">
                        Edit
                    </button>

                    <button
                        class="action-btn delete"
                        onclick="deleteStudent(${index})">
                        Delete
                    </button>

                </td>
            `;

            tableBody.appendChild(row);

        });

    }


    updateStats();

}


// Update Statistics

function updateStats() {

    // Total students

    totalStudents.textContent = students.length;


    // Average marks

    if (students.length === 0) {

        averageMarks.textContent = "0";

        return;
    }


    let total = 0;


    students.forEach(function(student) {

        total += Number(student.marks);

    });


    let average = total / students.length;


    averageMarks.textContent = average.toFixed(2);

}


// Add / Update Student

form.addEventListener("submit", function(event) {

    event.preventDefault();


    const student = {

        name: nameInput.value.trim(),

        roll: rollInput.value.trim(),

        course: courseInput.value,

        marks: Number(marksInput.value)

    };


    // Validation

    if (
        student.name === "" ||
        student.roll === "" ||
        student.course === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    if (
        student.marks < 0 ||
        student.marks > 100
    ) {

        alert("Marks must be between 0 and 100.");

        return;
    }


    // Add new student

    if (editIndex === -1) {

        // Check duplicate roll number

        const duplicate = students.some(function(s) {

            return s.roll.toLowerCase() ===
                   student.roll.toLowerCase();

        });


        if (duplicate) {

            alert("Roll number already exists.");

            return;
        }


        students.push(student);

    }

    // Update existing student

    else {

        students[editIndex] = student;

        editIndex = -1;

        submitBtn.textContent = "Submit";

    }


    // Save data

    saveStudents();


    // Clear form

    form.reset();


    // Display updated table

    displayStudents();

});


// Edit Student

function editStudent(index) {

    const student = students[index];


    nameInput.value = student.name;

    rollInput.value = student.roll;

    courseInput.value = student.course;

    marksInput.value = student.marks;


    editIndex = index;


    submitBtn.textContent = "Update";


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// Delete Student

function deleteStudent(index) {

    const confirmDelete =
        confirm("Are you sure you want to delete this student?");


    if (confirmDelete) {

        students.splice(index, 1);


        saveStudents();


        displayStudents();

    }

}


// Search Student

searchInput.addEventListener("input", function() {

    const searchValue =
        searchInput.value.toLowerCase().trim();


    const filteredStudents = students.filter(function(student) {

        return (

            student.name
                .toLowerCase()
                .includes(searchValue)

            ||

            student.roll
                .toLowerCase()
                .includes(searchValue)

        );

    });


    displayStudents(filteredStudents);

});


// Load students when page opens

displayStudents();