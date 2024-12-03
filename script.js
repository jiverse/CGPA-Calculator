document.getElementById("addCourse").addEventListener("click", function () {
    const courseRow = document.createElement("div");
    courseRow.classList.add("course-row");
    courseRow.innerHTML = `
        <input type="number" placeholder="Grade (0-10)" class="grade" required>
        <input type="number" placeholder="Credit Hours" class="credits" required>
    `;
    document.getElementById("courseInputs").appendChild(courseRow);
});

document.getElementById("cgpaForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const grades = document.querySelectorAll(".grade");
    const credits = document.querySelectorAll(".credits");

    let totalWeightedGrades = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        const grade = parseFloat(grades[i].value);
        const credit = parseInt(credits[i].value);

        if (isNaN(grade) || isNaN(credit)) {
            alert("Please enter valid grades and credit hours!");
            return;
        }

        totalWeightedGrades += grade * credit;
        totalCredits += credit;
    }

    if (totalCredits === 0) {
        alert("Total credits cannot be zero!");
    } else {
        const cgpa = (totalWeightedGrades / totalCredits).toFixed(2);
        document.getElementById("result").innerText = `Your CGPA is: ${cgpa}`;
    }
});
