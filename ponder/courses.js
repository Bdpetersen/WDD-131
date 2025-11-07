// courses.js

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 25,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  // Activity 3: Refactored method to handle both enrolling and dropping
  changeEnrollment: function (sectionNum, add = true) {
    // Find the right section. Array.findIndex will work here
    // The sectionNum from the input is a string, so we use '==' for type coercion
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );

    if (sectionIndex >= 0) {
      if (add) {
        // Enroll student: increase enrolled count
        this.sections[sectionIndex].enrolled++;
      } else {
        // Drop student: decrease enrolled count
        this.sections[sectionIndex].enrolled--;
      }
      // Re-render the sections table to show the update
      renderSections(this.sections);
    }
  },
};

// Function from Activity 1, step 3
function setCourseInfo(course) {
  const courseName = document.querySelector("#courseName");
  const courseCode = document.querySelector("#courseCode");
  courseName.textContent = course.name;
  courseCode.textContent = course.code;
}

// Helper function to generate the HTML for a single section row
function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`;
}

// Function from Activity 1, step 4
function renderSections(sections) {
  // Use map to convert the array of section objects to an array of HTML strings
  const html = sections.map(sectionTemplate);
  // Join the array of HTML strings and set it as the innerHTML of the tbody
  document.querySelector("#sections").innerHTML = html.join("");
}

// Activity 2, step 5: Add event listeners for the buttons
document.querySelector("#enrollStudent").addEventListener("click", function () {
  // Get the section number from the input field
  const sectionNum = document.querySelector("#sectionNumber").value;
  // Call the refactored method to enroll (add=true is the default)
  aCourse.changeEnrollment(sectionNum);
});

document.querySelector("#dropStudent").addEventListener("click", function () {
  // Get the section number from the input field
  const sectionNum = document.querySelector("#sectionNumber").value;
  // Call the refactored method to drop (pass add=false)
  aCourse.changeEnrollment(sectionNum, false);
});

// Initial calls to display course info and sections on page load
setCourseInfo(aCourse);
renderSections(aCourse.sections);