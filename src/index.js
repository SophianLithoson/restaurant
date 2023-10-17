import "./style.css";
import homeContent from "./home.js";
import menuContent from "./menu.js";
import contactContent from "./contact.js";

const homeButton = document.getElementById("home-button");
const menuButton = document.getElementById("menu-button");
const contactButton = document.getElementById("contact-button");

homeContent();

document.getElementById("nav-buttons").addEventListener("click", (e) => {
    switch (e.target.textContent) {
        case "Home":
            homeButton.classList.add("active");
            menuButton.classList.remove("active");
            contactButton.classList.remove("active");
            homeContent();
            break;
        case "Menu":
            homeButton.classList.remove("active");
            menuButton.classList.add("active");
            contactButton.classList.remove("active");
            menuContent();
            break;
        case "Contact":
            homeButton.classList.remove("active");
            menuButton.classList.remove("active");
            contactButton.classList.add("active");
            contactContent();
            break;
    }
});


/* Footer stuff
Monkey icon: <a href="https://www.flaticon.com/free-icons/monkey" title="monkey icons">Monkey icons created by Freepik - Flaticon</a>
parrot: <a href="https://www.flaticon.com/free-icons/parrot" title="parrot icons">Parrot icons created by Mihimihi - Flaticon</a>
*/