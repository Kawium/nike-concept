function changeColor() {
  document.querySelector(".right-content").style.backgroundColor = "#f2b9be";
  document.querySelectorAll(".dot")[2].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[1].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.add("dot-selected");
}

function changeColor2() {
  document.querySelector(".right-content").style.backgroundColor = "#3affe3";
  document.querySelectorAll(".dot")[2].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[1].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[1].classList.add("dot-selected");
}

function changeColor3() {
  document.querySelector(".right-content").style.backgroundColor = "#ff4124";
  document.querySelectorAll(".dot")[2].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[1].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[0].classList.remove("dot-selected");
  document.querySelectorAll(".dot")[2].classList.add("dot-selected");
}
