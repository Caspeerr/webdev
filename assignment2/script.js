const form = document.getElementById("userForm");
const formContainer = document.getElementById("formContainer");
const idCard = document.getElementById("idCard");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const idNum = document.getElementById("idNumberInput").value;
  const faculty = document.getElementById("facultyInput").value;
  const concentration = document.getElementById("concentrationInput").value;

  document.getElementById("showName").textContent = name;
  document.getElementById("showIdNumber").textContent = idNum;
  document.getElementById("showFaculty").textContent = faculty;
  document.getElementById("showConcentration").textContent = concentration;

  formContainer.style.display = "none";
  idCard.style.display = "flex";
});
