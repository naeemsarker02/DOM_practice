let a = document.querySelector("h1");

a.addEventListener("mouseover", function () {
  if (a.innerHTML === "hey there") {
    a.innerHTML = "how are you?";
    a.style.backgroundColor = "yellow";
    a.style.color = "black";
  } else {
    a.innerHTML = "hey there";
    a.style.backgroundColor = "green";
    a.style.color = "white";
  }
});

let d = document.querySelector(".div1");
d.addEventListener("click", function () {
  d.style.backgroundColor = "purple";
  d.style.padding = "20px";
  d.style.border = "2px solid darkblue";
  d.style.borderRadius = "10px";
  d.style.transition = "background-color 0.5s ease";
  d.style.cursor = "pointer";
  d.style.color = "white";
  d.innerHTML = "You clicked the div!";
});

let e = document.querySelector("#div2");
e.addEventListener("click", function () {
  e.style.backgroundColor = "orange";
  e.style.padding = "20px";
  e.style.border = "2px solid darkred";
  e.style.borderRadius = "10px";
  e.style.transition = "background-color 0.5s ease";
  e.style.cursor = "pointer";
  e.style.color = "white";
  e.innerHTML = "You clicked the second div!";
});
let bulb = document.querySelector("#bulb");

bulb.addEventListener("click", function () {
  if (bulb.style.backgroundColor === "black") {
    bulb.style.backgroundColor = "white";
    bulb.innerHTML = "Light is ON";
    bulb.style.color = "black";
  } else {
    bulb.style.backgroundColor = "black";
    bulb.innerHTML = "Light is OFF";
    bulb.style.color = "white";
  }
});
let b = document.querySelector("#btn1");
b.addEventListener("click", function () {
  if (b.innerText === "OFF") {
    b.innerText = "ON";
    bulb.style.backgroundColor = "white";
    b.style.backgroundColor = "lightgreen";
    bulb.innerHTML = "light is ON";
    bulb.style.color = "black";
  } else {
    b.innerText = "OFF";
    bulb.style.backgroundColor = "black";
    bulb.innerHTML = "light is OFF";
    bulb.style.color = "white";
    b.style.backgroundColor = "red";
  }
});

let para = document.querySelectorAll("p");
para.forEach(function (para) {
  para.style.borderColor = "lightblue";
  para.style.color = "white";
});

let body = document.querySelector("body");
let changers = document.querySelectorAll(".changer");

changers.forEach(function (c) {
  c.addEventListener("click", function (e) {
    if (e.target.id === "red") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "green") {
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    } else {
      body.style.backgroundColor = e.target.id;
    }
  });
});
