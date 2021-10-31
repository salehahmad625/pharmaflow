let techDropDown = document.getElementById("techs");
techDropDown.addEventListener("change", () => {
  let techHeader = document.getElementById("techName");
  let techName = techDropDown.value;
  console.log(techName);
  techHeader.textContent = techName;
});

let closeModal = document.querySelector(".close");
let modal = document.querySelector(".bg-modal");
let assignBtn = document.getElementById("assign");
assignBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

let myForm = document.getElementById("myForm");
myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let val = "";
  if (document.getElementById("input").checked) {
    val = document.getElementById("input").value;
  } else if (document.getElementById("filling").checked) {
    val = document.getElementById("filling").value;
  } else if (document.getElementById("verification").checked) {
    val = document.getElementById("verification").value;
  } else if (document.getElementById("clerk").checked) {
    val = document.getElementById("clerk").value;
  }
  let newTask = document.createElement("h4");
  newTask.textContent = val;
  let currTask = document.querySelector(".curr-tasks");
  currTask.appendChild(newTask);
});
