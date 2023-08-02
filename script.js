document.addEventListener("DOMContentLoaded", function () {
  var timeClass = document.getElementById("time");
  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }

  // Function to update the time displayed on the page
  function updateTime() {
    let currentTime = new Date();
    let remainingHours = 24 - currentTime.getHours();
    let remainingMinutes = 60 - currentTime.getMinutes();
    let remainingSeconds = 60 - currentTime.getSeconds();

    remainingHours = formatTime(remainingHours);
    remainingMinutes = formatTime(remainingMinutes);
    remainingSeconds = formatTime(remainingSeconds);

    timeClass.innerHTML = `
        <div class="date"> 01 <br> Days </div>
        <div class="date"> ${remainingHours} <br> Hours </div>
        <div class="date"> ${remainingMinutes} <br> Minutes </div>
        <div class="date"> ${remainingSeconds} <br> Seconds </div>
      `;
  }

  // Initial call to update time
  updateTime();

  // Update time every second
  setInterval(updateTime, 1000);
});
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
