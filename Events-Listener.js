// Add Event Listener
let btn = document.querySelector("#btn");

btn.addEventListener("click" , ()=> {
   console.log("clicked the button - handler1");
})

btn.addEventListener("click" , ()=> {
  console.log("clicked the button - handler2");
})

const handler3 = ()=> {
  console.log("clicked the button - handler3");
};
btn.addEventListener("click",handler3);

btn.addEventListener("click" , ()=> {
  console.log("clicked the button - handler4");
})

/* Remove Event Listener syntax :- node.RemoveEventListener(event,callback);
- Note :- the callback referance should be same to remove
*/
btn.removeEventListener("click",handler3);
