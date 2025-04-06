document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    const toggleButton = document.querySelector('.header__toggle');
    const menu = document.querySelector('.header__menu');

    // Handle header shrinking on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    toggleButton.addEventListener('click', function() {
        toggleButton.classList.toggle('active');
        menu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.header__link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleButton.classList.remove('active');
            menu.classList.remove('active');
        });
    });

    // GitHub Project Click - Open GitHub in a new tab
    document.getElementById("github-project").addEventListener("click", () => {
        window.open("https://github.com/methan6427", "_blank");
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("darkToggle");
    const body = document.body;

    // On page load, check for dark mode preference
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
    }

    darkModeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Store dark mode preference in localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });
});
