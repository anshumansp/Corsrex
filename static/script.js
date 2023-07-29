// Showing the timer in the Registration Section

let timeClass = document.getElementById("time");
let timeClassParent = document.getElementById("reminder");

setInterval(() => {
  const currentTime = new Date();

  // const date = currentTime.getDate();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  // let daysLeft = 20 - date;
  let hoursLeft = 24 - hours;
  let minutesLeft = 60 - minutes;
  let secondsLeft = 60 - seconds;

  // daysLeft = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hoursLeft = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutesLeft = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  secondsLeft = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

  timeClass.innerHTML = `
    <div class="date"> 01 <br> Days </div>
    <div class="date"> ${hoursLeft} <br> Hours </div>
    <div class="date"> ${minutesLeft} <br> Minutes </div>
    <div class="date"> ${secondsLeft} <br> Seconds </div>`;

  timeClassParent.append(timeClass);
}, 1000);

// For Opening and Closing Menu in Responsiveness

const menuOpenButton = document.getElementById("menu");
const menuCloseButton = document.getElementById("menu-close");
const ulTag = document.getElementById("ul-tag");

menuOpenButton.addEventListener("click", function () {
  ulTag.classList.add("active");
});

menuCloseButton.addEventListener("click", function () {
  ulTag.classList.remove("active");
});

window.onscroll = () => {
  ulTag.classList.remove("active");
};

// Linking Courses to Course-Inner Page

let courses = document.querySelectorAll(".courses");

courses.forEach((course) => {
  course.addEventListener("click", () => {
    window.location.href = "course-inner.html";
  });
});
