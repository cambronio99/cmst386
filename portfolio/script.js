// Function to calculate the area of a rectangle
function calculateRectangleArea(length, width) {
    return length * width;
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
