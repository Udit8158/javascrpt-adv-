console.log("Creating drag and drop utility");

let whiteboxes = document.querySelectorAll('.whiteboxes');
let imagebox = document.querySelector('.imagebox');

imagebox.addEventListener('drag',()=>{
    console.log("drag");
})
imagebox.addEventListener('dragend',()=>{
    console.log("dragend");
})
imagebox.addEventListener('dragleave',()=>{
    console.log("dragleave");
})
imagebox.addEventListener('dragenter',()=>{
    console.log("dragenter");
})
imagebox.addEventListener('dragover',()=>{
    console.log("dragover");
})
imagebox.addEventListener('dragstart',()=>{
    console.log("dragstart");
})
