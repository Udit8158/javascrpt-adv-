// Make an array of courses
const courses = [
  {
    courseName: "JavaScript Course",
    coursePrice: 99,
  },
  {
    courseName: "ReacJs Course",
    coursePrice: 2199,
  },
  {
    courseName: "MERN Stack Course",
    coursePrice: 3199,
  },
  {
    courseName: "Python Course",
    coursePrice: 199,
  },
  {
    courseName: "C++ Course",
    coursePrice: 499,
  },
  {
    courseName: "MongoDB Course",
    coursePrice: 299,
  },
];

//Grab the elements
const ul = document.querySelector(".list-group");
const sortCoursesByPriceBtn = document.querySelector(".btn-success");
const sortCoursesByNameBtn = document.querySelector(".btn-primary");

//Define a function to display the courses
const showCourses = () => {
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.classList.add("float-right");
    li.classList.add("list-group-item");
    li.innerText = course.courseName;
    span.innerText = course.coursePrice + " Rs.";
    li.appendChild(span);
    ul.appendChild(li);
  });
};

//Call the function
showCourses();

//Sort Courses by price
sortCoursesByPriceBtn.addEventListener("click", () => {
  //Sorting courses array by ascending order of price

  courses.sort((a, b) => a.coursePrice - b.coursePrice);

  showCourses();
});

//Sort courses by name
sortCoursesByNameBtn.addEventListener("click", () => {
  ul.innerHTML = "";
  //Sorting courses array by ascending order of name
  courses.sort((a, b) => {
    if (a.courseName.toLocaleLowerCase() > b.courseName.toLocaleLowerCase()) {
      return 1; // Means "b" before "a"  accn to sort method docs
    }
    if (a.courseName.toLocaleLowerCase() < b.courseName.toLocaleLowerCase()) {
      return -1;
    }
    return 0;
  });

  //Call the function to show courses
  showCourses();
});
