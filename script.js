let timeClass = document.getElementById("time"),
  timeClassParent = document.getElementById("reminder");
setInterval(() => {
  let e = new Date(),
    t = e.getHours(),
    s = e.getMinutes(),
    n = e.getSeconds(),
    l = 24 - t,
    a = 60 - s,
    i = 60 - n;
  (l = l < 10 ? "0" + l : l),
    (a = a < 10 ? "0" + a : a),
    (i = i < 10 ? "0" + i : i),
    (timeClass.innerHTML = `
    <div class="date"> 01 <br> Days </div>
    <div class="date"> ${l} <br> Hours </div>
    <div class="date"> ${a} <br> Minutes </div>
    <div class="date"> ${i} <br> Seconds </div>`),
    timeClassParent.append(timeClass);
}, 1e3);
const menuOpenButton = document.getElementById("menu"),
  menuCloseButton = document.getElementById("menu-close"),
  ulTag = document.getElementById("ul-tag");
menuOpenButton.addEventListener("click", function () {
  ulTag.classList.add("active");
}),
  menuCloseButton.addEventListener("click", function () {
    ulTag.classList.remove("active");
  }),
  (window.onscroll = () => {
    ulTag.classList.remove("active");
  });
let courses = document.querySelectorAll(".courses");
courses.forEach((e) => {
  e.addEventListener("click", () => {
    window.location.href = "course-inner.html";
  });
});
