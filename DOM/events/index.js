const addLikeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const resetBtn = document.getElementById("resetBtn");
let cntLike = 0;
//1
addLikeBtn.addEventListener("click", () => {
  likeCount.textContent = ` Likes: ${cntLike++}`;
});

resetBtn.addEventListener("click", () => {
  cntLike = 0;
  likeCount.textContent = `Likes: ${cntLike}`;
});
//2
const nameInput = document.getElementById("nameInput");
const greetingMsg = document.getElementById("greetMsg");
const greetingBtn = document.getElementById("greetBtn");

greetingBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name === "") {
    greetingMsg.textContent = "please enter your name first ";
  } else {
    greetingMsg.textContent = `Welcome ${name}`;
  }
});
//3
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");
liveInput.addEventListener("input", (e) => {
  if (e.target.value.length < 20) {
    liveOutput.textContent = "waiting...";
  } else {
    liveOutput.textContent = e.target.value;
  }
});
//4
const keyInput = document.getElementById("keyInput");
const keyLog = document.getElementById("keyLog");
keyInput.addEventListener("keydown", (event) => {
  const keyName = event.key;
  keyLog.textContent = keyName;
  if (event.key === "Escape") {
    keyLog.textContent = "";
  }
  if (event.ctrlKey) {
    keyLog.textContent = "Ctrl + " + event.key;
  } else if (event.altKey) {
    keyLog.textContent = "Alt + " + event.key;
  } else if (event.shiftKey) {
    keyLog.textContent = "Shift +" + event.key;
  }
});

//5

const taskList = document.getElementById("taskList");

taskList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    const li = event.target;
    if (li.style.textDecoration === "line-through") {
      li.style.textDecoration = "none";
    } else {
      li.style.textDecoration = "line-through";
    }
  }
});

taskList.addEventListener("dblclick", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
//6
const contactForm = document.getElementById("contactForm");
const emailInput = document.getElementById("emailInput");
const subjectInput = document.getElementById("subjectInput");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailInput.value === "" || subjectInput.value === "") {
    formStatus.textContent = "please fill all fields";
    formStatus.style.color = "red";
  } else {
    formStatus.textContent = "Message sent! to " + emailInput.value;
    formStatus.style.color = "green";
  }
});
