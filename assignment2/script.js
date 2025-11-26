const form = document.getElementById("studentForm");
const formWrapper = document.getElementById("formWrapper");
const idCard = document.getElementById("idCard");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("nameInput").value;
  const studentID = document.getElementById("idInput").value;
  const faculty = document.getElementById("facultyInput").value;
  const photoInput = document.getElementById("photoInput");

  document.getElementById("showName").textContent = name;
  document.getElementById("showID").textContent = studentID;
  document.getElementById("showFaculty").textContent = faculty;

  
  if(photoInput.files && photoInput.files[0]){
    const reader = new FileReader();
    reader.onload = function(e){
      document.getElementById("showPhoto").src = e.target.result;
    }
    reader.readAsDataURL(photoInput.files[0]);
  } else {
    document.getElementById("showPhoto").src = "";
  }

  formWrapper.style.display = "none";
  idCard.style.display = "flex";
});
