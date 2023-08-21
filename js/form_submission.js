document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Client-side validation
  if (!this.checkValidity()) {
      event.stopPropagation();
      this.classList.add("was-validated");
      return;
  }

  const formData = new FormData(this);

  // Send form data to server using AJAX
  fetch("process-form.php", {
      method: "POST",
      body: formData
  })
  .then(response => response.json())
  .then(data => {
      console.log(data); // Response from the server
      // Display success or error message to the user
  })
  .catch(error => {
      console.error("Error:", error);
  });
});
