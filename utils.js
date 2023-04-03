//we can create a new function which will manipulate the elements of the page by their IDs
//To do so we need to mofiy the html, and add an ID to the element that we want to modify
function modifyPercentage(percentage) {
    document.getElementById("percentage").textContent = percentage + "% OFF";
}