// let divLogo= document.createElement("div")
// let imgLogo=  document.createElement("img")


// let headercontainer= document.getElementsByClassName("header-container")
// imgLogo.setAttribute("src", "logo.png")
// divLogo.classList.add("logo")
// divLogo.appendChild(imgLogo)
// let header= headercontainer.parentNode
// header.insertBefore(divLogo,headercontainer )

// console.log(headercontainer [0])


let divLogo = document.createElement("div");
let imgLogo = document.createElement("img");


imgLogo.setAttribute("src", "logo.png");
divLogo.classList.add("logo");
// divLogo.appendChild(imgLogo);


let headerContainer = document.getElementsByClassName("header-container")[0];
let header = headerContainer.parentNode;


header.insertBefore(divLogo, headerContainer);

console.log(headerContainer);
