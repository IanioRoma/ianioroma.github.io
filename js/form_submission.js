document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Client-side validation
    if (!this.checkValidity()) {
        event.stopPropagation();
        this.classList.add("was-validated");
        return;
    }

    const formData = new FormData(this);

    // Specify the AJAX URL here
    const ajaxUrl = "http://formsubb.000.pe/process-form.php";

    // Send form data to server using AJAX
    fetch(ajaxUrl, {
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
