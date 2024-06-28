document.addEventListener("DOMContentLoaded", function () {
  const cardForm = document.getElementById("cardForm");
  const modal = document.getElementById("modal");
  const certificateContent = document.getElementById("certificateContent");
  const closeModal = document.querySelector(".close");
  const body = document.querySelector("body");

  // Hide the modal initially
  modal.style.display = "none";

  cardForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // 🚨 Get input values
    const studentNameInput = document.getElementById("studentName");
    const personalMessageInput = document.getElementById("personalMessage");
    const courseNameInput = document.getElementById("courseName");

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName =
      courseNameInput.value === "" ? "a course" : courseNameInput.value; // Fallback to "a course" if no input

    if (studentName.trim() === "" || personalMessage.trim() === "") {
      alert("Please fill in all fields");
      return;
    }

    // 🚨 Generate certificate content dynamically
    certificateContent.innerHTML = `
      <h1>Certificate of Achievement</h1>
      <p>This is to Certify that<p>
      <h3>${studentName}</h3>
      <p>has almost completed the<p>
      <h3>${courseName}</h3>
      <p>with lengendary perseverance and world-class bad-assery <br> for never giving up \u{1F3C6}<p>
      <img src= "logo.png">
      <p>${personalMessage}</p>
    `;

    //  Display the modal
    modal.style.display = "block";
    body.style.backgroundImage = "url(./images/6ob.gif)";

    // Clear the form inputs
    studentNameInput.value = "";
    personalMessageInput.value = "";
    if (courseNameInput) courseNameInput.value = "";
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    body.style.backgroundImage = "";
  });
});
