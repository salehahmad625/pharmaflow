let techDropDown = document.getElementById("techs");
techDropDown.addEventListener("change", () => {
  let techHeader = document.getElementById("techName");
  let techName = techDropDown.value;
  console.log(techName);
  techHeader.textContent = techName;
});
