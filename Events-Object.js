/* Event Object
- It is a special object that has details about the event.
- All event handles have access to the Event Object's properties and methods.

Exp :-
node.event=(e) =>{
// handle here
}
e.target
e.type
e.clientX
e.clientY

*/
let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) =>{
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX);
  console.log(evt.clientY);
  alert("Hello!");
  console.log("clicked the button")
}

let btn2 = document.querySelector("#btn2");
  btn2.ondblclick = (evt)=>{
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX);
    console.log(evt.clientY);
    console.log("clicked button 2 times");
  }

let box = document.querySelector("#box");
box.onmouseover = (evt) =>{
  console.log(evt);
  console.log(evt.type);
  console.log(evt.target);
  console.log(evt.clientX);
  console.log(evt.clientY);
  console.log("You can inside the box");
}

