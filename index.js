const close = document.querySelector(".close");
const open = document.querySelector(".ham");
const menu = document.querySelector(".menu");
close.addEventListener("click", () => {
  menu.style.visibility = "hidden";
});
open.addEventListener("click", () => {
  menu.style.visibility = "visible";
});
// document.querySelector(".items").addEventListener("click", (e) => {
//   window.location.href = "./cart.html";
// });
const fruits = [];
document.getElementById("1").addEventListener("click", (e) => {
  send(1);
  document.getElementById("1").style.backgroundColor = "green";
});
document.getElementById("2").addEventListener("click", (e) => {
  send(2);
  document.getElementById("2").style.backgroundColor = "green";
});
document.getElementById("3").addEventListener("click", (e) => {
  send(3);
  document.getElementById("3").style.backgroundColor = "green";
});
document.getElementById("4").addEventListener("click", (e) => {
  send(4);
  document.getElementById("4").style.backgroundColor = "green";
});
document.getElementById("5").addEventListener("click", (e) => {
  send(5);
  document.getElementById("5").style.backgroundColor = "green";
});
document.getElementById("6").addEventListener("click", (e) => {
  send(6);
  document.getElementById("6").style.backgroundColor = "green";
});
document.getElementById("7").addEventListener("click", (e) => {
  send(7);
  document.getElementById("7").style.backgroundColor = "green";
});
document.getElementById("8").addEventListener("click", (e) => {
  send(8);
  document.getElementById("8").style.backgroundColor = "green";
});
document.getElementById("9").addEventListener("click", (e) => {
  send(9);
  document.getElementById("9").style.backgroundColor = "green";
});
document.getElementById("10").addEventListener("click", (e) => {
  send(10);
  document.getElementById("10").style.backgroundColor = "green";
});
document.getElementById("11").addEventListener("click", (e) => {
  send(11);
  document.getElementById("11").style.backgroundColor = "green";
});
document.getElementById("12").addEventListener("click", (e) => {
  send(12);
  document.getElementById("12").style.backgroundColor = "green";
});
document.getElementById("13").addEventListener("click", (e) => {
  send(13);
  document.getElementById("32").style.backgroundColor = "green";
});
document.getElementById("14").addEventListener("click", (e) => {
  send(14);
  document.getElementById("14").style.backgroundColor = "green";
});
document.getElementById("15").addEventListener("click", (e) => {
  send(15);
  document.getElementById("15").style.backgroundColor = "green";
});
document.getElementById("16").addEventListener("click", (e) => {
  send(16);
  document.getElementById("16").style.backgroundColor = "green";
});
document.getElementById("17").addEventListener("click", (e) => {
  send(17);
  document.getElementById("17").style.backgroundColor = "green";
});
document.getElementById("18").addEventListener("click", (e) => {
  send(18);
  document.getElementById("18").style.backgroundColor = "green";
});
async function send(r) {
  const req = new XMLHttpRequest();
  const urlParams = {
    r: r,
  };

  const baseUrl = "http://localhost:8000/a";
  req.open("POST", baseUrl, true);
  req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  req.send(JSON.stringify(urlParams));

  req.onreadystatechange = async function () {
    // Call a function when the state changes.
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
      const nodedata = JSON.parse(this.responseText);
    }
  };
}
