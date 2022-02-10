const deleteBtn = document.querySelector(".modal");
const closeBtn = document.querySelector(".modal-delete");
const noBtn = document.querySelector("#no");
const yesBtn = document.querySelector("#yes");
const modalContainer = document.querySelector(".modal-container");

deleteBtn.addEventListener("click",()=>{
    modalContainer.style.display = "flex";
    console.log("clicked");
})

closeBtn.addEventListener("click",()=>{
    modalContainer.style.display = "none";
})

noBtn.addEventListener("click",()=>{
    modalContainer.style.display = "none";
})

yesBtn.addEventListener("click",()=>{
    modalContainer.style.display = "none";
})


