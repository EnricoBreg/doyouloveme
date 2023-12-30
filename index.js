console.log("Do you love me game started");


const yesBtn = document.querySelector("button#yes-btn");
const noBtn = document.querySelector("button#no-btn");
const textContainer = document.querySelector("div#text-container");
const yeyContainer = document.querySelector("div#yey-container");
const questionImage = document.querySelector("#question-image")
const yeyImage = document.querySelector("#yey-image")

/* On answer yes */
yesBtn.addEventListener("click", showYeyImage);
/* On answer no */
noBtn.addEventListener("mouseover", moveNoBtn);


function showYeyImage(e) {
    yeyContainer.classList.remove("d-none");
    yeyContainer.classList.add("block");
    textContainer.classList.remove("d-flex");
    textContainer.classList.add("d-none");
    
    questionImage.classList.remove("block");
    questionImage.classList.add("d-none");

    yeyImage.classList.remove("d-none");
    yeyImage.classList.add("block");
}

function moveNoBtn(e) {
    noBtn.style.position = "absolute";
    var i = Math.floor(Math.random()*500)+1;
    var j = Math.floor(Math.random()*500)+1;
    noBtn.style.left = i+"px";
    noBtn.style.top = j+"px";
}



