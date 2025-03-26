function sendMail(event) {
    event.preventDefault(); 

    let form = document.getElementById("contact-form"); 

    let params = {
        first: document.getElementById('first-name').value,
        last: document.getElementById('last-name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_4hl4slf", "template_f3em30r", params)
        .then(function (response) {
            console.log("SUCCESS!", response.status, response.text);
            alert("Email Sent Successfully!");
            
            form.reset();
        })
        .catch(function (error) {
            console.error("FAILED...", error);
            alert("Email failed to send. Please try again.");
        });
}


document.getElementById("contact-form").addEventListener("submit", sendMail);
