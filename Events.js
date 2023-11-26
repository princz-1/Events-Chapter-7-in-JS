
/* Events in JS

- The change in the state of an object is known as an Event.

- Events are fired to notify code of "intersting change" that may affect code execution.

--> Types of events <--
- Mouse events (click,double click etc.)
- Keyboard events (Keypress,Keyup,Keydown)
- Form events (submit etc.)
- Print event & many more

*/

let btn1 = document.querySelector("#btn1");
btn1.onclick = ()=>{
  alert("Hello!");
  console.log("btn1 was clicked");
}

let btn2 = document.querySelector("#btn2");
btn2.ondblclick = () =>{
  console.log("button was 2 timeclicked");
}

let box = document.querySelector("#box");
box.onmouseover = ()=>{
  console.log("you are inside the box")
}
