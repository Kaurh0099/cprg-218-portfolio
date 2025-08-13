 //Select the video element with id 'projectVideo1'
const video1 = document.getElementById('projectVideo1');

// Scroll-down button functionality
const scrollDownBtn = document.getElementById("scrollDownBtn");
const aboutSection = document.getElementById("about");

scrollDownBtn.addEventListener("click", () => {
    aboutSection.scrollIntoView({ behavior: "smooth" });
});


// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Smooth scroll to contact section from hero button
    const contactBtn = document.getElementById("contact");
    const contactSection = document.querySelector(".contact");

    contactBtn.addEventListener("click", () => {
        contactSection.scrollIntoView({ behavior: "smooth" });
    });

    // Send message button
    const sendBtn = document.getElementById("sendMessage");

    sendBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent form submission if inside form

        // Get input values
        const name = document.getElementById("fullName").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Simple validation
        if(name === "" || email === "" || message === ""){
            alert("Please fill in all fields!");
            return;
        }

        // Example action: just log it (replace with email sending or API later)
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        alert("Your message has been sent! ✅");

        // Clear inputs
        document.getElementById("fullName").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    });

});

