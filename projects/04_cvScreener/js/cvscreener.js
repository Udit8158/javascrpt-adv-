console.log("welcome");

//Data of the applicants
const data = [
  {
    name: "Udit",
    age: 18,
    language: "Python",
    frmaework: "Django",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
  {
    name: "Harry",
    age: 28,
    language: "JavaScript",
    frmaework: "React",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Rohan",
    age: 48,
    language: "Python",
    frmaework: "Flask",
    image: "https://randomuser.me/api/portraits/men/53.jpg",
  },
  {
    name: "Lana",
    age: 19,
    language: "Python",
    frmaework: "Django",
    image: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Jisu",
    age: 14,
    language: "Go",
    frmaework: "Django",
    image: "https://randomuser.me/api/portraits/men/58.jpg",
  },
  {
    name: "Luci",
    age: 23,
    language: "c++",
    frmaework: "Django",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
];

// console.log(data);

//Using itreator to collect data
function dataItreator(data) {
  let nextIndex = 0;
  return {
    next: () => {
      if (nextIndex < data.length) {
        return {
          value: data[nextIndex++],
          done: false,
        };
      } else {
        return {
          done: true,
        };
      }
    },
  };
}

// let applicants = dataItreator(data);
// console.log(applicants.next().value.name)

const nextBtn = document.getElementById("next");
let applicants = dataItreator(data);

//Adding this function at startup
clickActionFetc();

//Click event on the next button
nextBtn.addEventListener("click", clickActionFetc);

//Click action fucntion
function clickActionFetc(){
    // console.log('clicked');
  //define current applicant
  let currentAplicants = applicants.next().value;
//   console.log(currentAplicants);
  //grabing some important elements
  let image = document.getElementById("image");
  let profile = document.getElementById("profile");

  if (currentAplicants != undefined){
      //populate image section
      image.innerHTML = `<img src='${currentAplicants.image}'>`;
        // console.log(currentAplicants)
      //populate profile section
      profile.innerHTML = `
        <ul class="list-group">
       <li class="list-group-item">Name : ${currentAplicants.name}</li>
       <li class="list-group-item">${currentAplicants.age} years old</li>
       <li class="list-group-item">Working language is ${currentAplicants.language}</li>
       <li class="list-group-item">Working framework is ${currentAplicants.frmaework}</li>
    </ul>
        `;
  }
  else{
      alert(`End of aplicants`);   //Reload the page after ending the data
      window.location.reload();
}
}
