document.getElementById('contactForm').addEventListener('submit', function(event) {
    let isValid = true;
    
    // Custom validation logic
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (name.value.trim() === "") {
        alert("Name is required.");
        isValid = false;
    }

    if (email.value.trim() === "" || !email.value.includes('@')) {
        alert("Please enter a valid email.");
        isValid = false;
    }

    if (message.value.trim() === "") {
        alert("Message is required.");
        isValid = false;
    }

    if (!isValid) {
        event.preventDefault();
    }
});