document.addEventListener("DOMContentLoaded", function() {
    const welcomeText = document.getElementById("welcomeText");
    const cameronName = document.getElementById("cameronName");
    const navMenu = document.getElementById("navbar");

    // Fade out welcome text
    setTimeout(function() {
        welcomeText.style.opacity = 0;
        setTimeout(function() {
            welcomeText.style.display = "none";
            // Fade in "Cameron Owings"
            cameronName.style.opacity = 1;
            // Fade in nav menu
            navMenu.style.opacity = 1;
            navMenu.style.transform = "translateY(0)"; // Bring nav menu to its original position
        }, 1000);
    }, 3000); // Speed for da Animation
});

function displayGreeting() {
    var now = new Date();
    var hour = now.getHours();
    var greeting;

    if (hour < 12) {
        greeting = "Good morning!";
    } else if (hour < 18) {
        greeting = "Good afternoon!";
    } else {
        greeting = "Good evening!";
    }

    alert(greeting);
}

// Function to validate a form
function validateForm() {
    var name = document.forms["myForm"]["name"].value;
    var email = document.forms["myForm"]["email"].value;

    if (name == "" || email == "") {
        alert("Name and email are required fields.");
        return false;
    }

    return true;
}
