/* Created a variable "numOfImages" and use it to loop through the imgs within the div class of "responsive"
to add the event listener function click and the function "mouseClick" */
let numOfImages = document.querySelectorAll(".responsive").length;
for (let i = 0; i < numOfImages; i++)
{
    // Calling the function mouseClick while adding the event listener function click
    document.querySelectorAll(".responsive")[i].addEventListener("click", mouseClick);
}

// mouseClick function with the variable imgTag
function mouseClick(imgTag)
{
    // querySelector goes through the div class "responsive" and takes in the image tags and stores it
    imgTag = this.querySelector('img');
    selected(imgTag.classList.value);
}

function selected(getImage)
{
    // Creates the popup window when one of the images are clicked
    const myWindow = window.open("", "pop-up window", "width=1200, height=650")

    switch(getImage)
    {
        case 'rome':
            // myWindow.document.write("<p>Click <a href=https://www.italia.it/en/>here</a> to visit the official tourist site!</p>");
            myWindow.location.replace("https://www.italia.it/en/");
            setTimeout(function()
            {
                myWindow.close();
            }, 5000);
            break;
        case 'effle-tower':
            // myWindow.document.write("<p>Click <a href=https://parisjetaime.com/eng/>here</a> to visit the official tourist site!</p>");
            myWindow.location.replace("https://parisjetaime.com/eng/");
            setTimeout(function()
            {
                myWindow.close();
            }, 5000);
            break;
        case 'athens':
            // myWindow.document.write("<p>Click <a href=https://www.visitgreece.gr/mainland/attica/athens/>here</a> to visit the official tourist site!</p>");
            myWindow.location.replace("https://www.visitgreece.gr/mainland/attica/athens/");
            setTimeout(function()
            {
                myWindow.close();
            }, 5000);
            break;
        case 'buckingham-palace':
            // myWindow.document.write("<p>Click <a href=https://www.visitlondon.com/>here</a> to visit the official tourist site!</p>");
            myWindow.location.replace("https://www.visitlondon.com/");
            setTimeout(function()
            {
                myWindow.close();
            }, 5000);
            break;
    }
}