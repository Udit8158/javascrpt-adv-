// Grab the elements

const addTitle = document.querySelector("#addTitle");
const addTxt = document.querySelector("#addTxt");
const addBtn = document.querySelector("#addBtn");
const notesElement = document.querySelector("#notes");

// Define variables
const notes = localStorage.getItem("notes");

// Define some functions
const showNotes = () => {
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  // console.log(notesArr);
  let html = "";
  notesArr.forEach((e, index) => {
    html += `
    <div class="noteCard my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${e.title}</h5>
            <p class="card-text">${e.text}</p>
            <button id="${index} "onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
          </div>
        </div>
    `;
  });
  console.log(html);
  if (notesArr.length != 0) {
    notesElement.innerHTML = html;
  } else {
    notesElement.innerHTML =
      "You donot have notes till now. To add note click on the add button";
  }
  // document.location.reload();
};

const deleteNote = (index) => {
  console.log("Click", index);
  notesArr.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  showNotes();
  document.location.reload();
};

// event listners
addBtn.addEventListener("click", () => {
  // console.log("clicked");
  if (notes === null) {
    notesArr = [];
  } else {
    notesArr = JSON.parse(notes);
  }
  let myObj = {
    title: addTitle.value,
    text: addTxt.value,
  };
  notesArr.push(myObj);
  localStorage.setItem("notes", JSON.stringify(notesArr));
  addTitle.value = "";
  addTxt.value = "";
  showNotes();
  document.location.reload();
});

// Run the functions

// localStorage.clear();
showNotes();
