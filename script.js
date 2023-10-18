// Function to toggle the mobile menu
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Function to smoothly scroll to the target section
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 100, // Adjust this value for better scroll position
            behavior: "smooth",
        });
        navbar.classList.remove("active"); // Close the mobile menu on click
    });
});

// Function to submit the contact form
const contactForm = document.querySelector(".contact form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent the form from actually submitting
    // You can add your code here to process the form data, e.g., send it to a server
    alert("Form submitted!"); // Display a success message (you can replace this with your actual code)
});
