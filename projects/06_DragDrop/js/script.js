console.log("Creating drag and drop utility");

let whiteboxes = document.getElementsByClassName('whiteboxes');
let firstBox = document.querySelector('.firstBox');
let imagebox = document.querySelector('.imagebox');
console.log(firstBox.firstElementChild)

for (const whitebox of whiteboxes) {
    console.log(whitebox)

// imagebox.addEventListener('dragstart',()=>{
//     console.log("dragstart");
// })
// imagebox.addEventListener('drag',()=>{
//     console.log("drag");
// })
// imagebox.addEventListener('dragover',()=>{
//     console.log("dragover");
// })
imagebox.addEventListener('dragleave',(e)=>{
    console.log("dragleave");
    imagebox.style = "border : 2px solid black ; display:none";
    e.target.style = "display:none"
})
// whitebox.addEventListener('dragend',()=>{
//     console.log("dragend");
// })
//When entering to the another the box
whitebox.addEventListener('dragenter',(e)=>{
    console.log("dragenter");
    e.target.className = "appendClass"
})
whitebox.addEventListener('drop',()=>{
    console.log("drop");
})
}
