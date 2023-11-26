// Create a toggle button that change the screen to dark-mode when clicked again.

let modebtn = document.querySelector("#mode");

let currMode = "Light"; 
modebtn.addEventListener("click",()=>{
  if(currMode === "Light"){
    currMode = "Dark";
    document.querySelector("body").style.backgroundColor = "black";
  }else{
    currMode = "Light";
    document.querySelector("body").style.backgroundColor = "white";
  }
console.log(currMode);
});
