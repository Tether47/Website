document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.menu a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Minimize/Maximize header on hover
    const header = document.querySelector("header");
    const headerContent = document.querySelector(".container");
    const headerHeight = header.offsetHeight;
    const headerWidth = header.offsetWidth;

    let isHeaderExpanded = true; // Track if header is expanded or minimized

    // Calculate the position of the quartile right side of the top of the webpage
    const quartileRight = window.innerWidth * 0.75;

    // Navbar fade animation
    const navbar = document.querySelector(".navbar");

    // Function to decrease opacity of navbar when mouse is not over it
    function decreaseOpacity() {
        navbar.style.opacity = "0.5"; // Semi-transparent
    }

    // Function to restore opacity of navbar when mouse is over it
    function restoreOpacity() {
        navbar.style.opacity = "1"; // Fully visible
    }

    // Event listener for mouse entering the navbar
    navbar.addEventListener("mouseenter", restoreOpacity);

    // Event listener for mouse leaving the navbar
    navbar.addEventListener("mouseleave", decreaseOpacity);

    // Initially decrease opacity of navbar
    decreaseOpacity();

    // Event listener for scrolling
    window.addEventListener("scroll", function() {
        const scrollTop = window.scrollY;
        const bodyHeight = document.body.scrollHeight; // Updated to get total body height
        const windowHeight = window.innerHeight;
        const maxScroll = bodyHeight - windowHeight;
        const opacity = 1 - (scrollTop / maxScroll); // Calculate opacity based on scroll position

        document.body.style.opacity = opacity.toFixed(2); // Set opacity with two decimal places

        if (window.scrollY < headerHeight && window.scrollX > quartileRight) {
            headerContent.style.display = "none";
            header.style.width = "50px"; // Adjust width as needed
            isHeaderExpanded = false;
        } else {
            if (!isHeaderExpanded) {
                headerContent.style.display = "block";
                                header.style.width = "auto"; // Reset width
                                isHeaderExpanded = true;
                            }
                        }
                    });
                });
                