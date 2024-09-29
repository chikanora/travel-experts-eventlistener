/*
    The <p> tags below the input fields should only appear if the user focuses on the input fields. If the user clicks away/unfocuses the input fields, the <p> tag corresponding to the input field are to disappear and only reappear if it's focused again.

    Modify the registration form to ask for confirmation before submitting or resetting. Put a click event handler on the submit and reset buttons of the form. When these buttons are clicked, confirmation diologs should pop up asking the user if they really want to either submit
    or reset. If the user clicks "ok", the submit or reset will be executed accordingly, otherwise they should be cancelled.
    Use of alert may be used.
*/

/*
// TEST BLOCK
let x = document.getElementById("inputfields");
x.addEventListener("focusin", myFocusFunction);
x.addEventListener("focusout", myBlurFunction);

function myFocusFunction()
{
    document.getElementById("desc").style.display = "block";
}

function myBlurFunction()
{
    document.getElementById("desc").style.display  = "none";
}*/

// Make it so the paragraph below the input fields appear if focused on and disappear if unfocused
let x = document.querySelectorAll(".inputfields").length;
for (let i = 0; i < x; i++)
{
    document.querySelectorAll(".inputfields")[i].addEventListener("focusin", myFocusFunction);
    document.querySelectorAll(".inputfields")[i].addEventListener("focusout", myBlurFunction);
}

const y = document.querySelectorAll(".desc");

// Displays the hints for users to follow when filling out the fields
function myFocusFunction()
{
    this.nextElementSibling.style.display = "block"; // Makes the hint appear if the field is selected
}

function myBlurFunction()
{
    this.nextElementSibling.style.display = "none"; // Makes the hint disappear if the field is unselected
}

// Validation check function
// Unfortunately it does not work, mainly due to time constraint and many attempts to make it functional with the confirm_submit() function.
/* function validateForm()
{
    // Validation check
    let isValid = false;
    
    // Input variables
    let fullName = document.querySelector("#fullname"); // ID: fullname
    let userName = document.querySelector("#username"); // ID: username
    let password = document.querySelector("#password"); // ID: password
    let email = document.querySelector("#email"); // ID: email
    let phone = document.querySelector("#phonenumber"); // ID: phonenumber
    let address =  document.querySelector("#address"); // ID: address
    let city = document.querySelector("#city"); // ID: city
    let province = document.querySelector("#province"); // ID: province
    let postalCode = document.querySelector("#postalcode"); // ID: postalcode

    // Error message
    let error = '';

    // Checks if fullname field is empty
    if (fullName === '')
    {
        error += "Full name cannot be empty!";
    }

    // Check if username field is empty
    if (userName === '')
    {
        error += "Username cannot be empty!";
    }

    // Check if password field is empty
    if (password === '')
    {
        error += "Password cannot be empty!";
    }



    // Check if the error message is empty or not. If empty, returns true and user is able submit the form. If not, user cannot submit.
    if (error === '')
    {
        return isValid = true;
    }
    else
    {
        alert(error);
        return isValid = false;
    }
}*/

// Submit and Reset validation
function confirm_submit() // Submit function
{
    return confirm("Are you sure you want to submit?"); // If user confirms, goes straight to the submitted page. If not, everything retains the same prior to submitting.
}

function confirm_reset() // Reset function
{
    return confirm("Are you sure you want to reset?"); // If user confirms, all the texts in the fields are clear. If not, everything retains the sames prior to resetting.
}