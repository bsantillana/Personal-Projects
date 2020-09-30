import "./styles.css";

function addDataAttributes() {
  //set local variables used throughout the function
  const buttons = document.querySelectorAll(".w-button"); //grabs all the button elemnets
  const socialIcons = document.querySelectorAll(".social-link"); //grabs all the social icons
  var relativeURL = window.location.pathname; //grabs the current page's relative URL

  //loop through all the buttons on the page
  for (var i = 0; i < buttons.length; i++) {
    const destinationURL = buttons[i].getAttribute("href"); //grabs the realtive URL of the destination link
    //dynamically adding the data attributes
    buttons[i].setAttribute("data-linktype", "button");
    buttons[i].setAttribute("data-source-page", relativeURL);
    buttons[i].setAttribute("data-target-page", destinationURL);
  }

  //loop through all the social icons on the page
  for (var j = 0; j < socialIcons.length; j++) {
    const destinationURL = socialIcons[j].pathname; //grabs the realtive URL of the destination link
    //dynamically adding the data attributes
    socialIcons[j].setAttribute("data-linktype", "social-icon");
    socialIcons[j].setAttribute("data-source-page", relativeURL);
    socialIcons[j].setAttribute("data-target-page", destinationURL);
  }
}
