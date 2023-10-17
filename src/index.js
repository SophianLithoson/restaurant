import "./style.css";

pageContent();

function pageContent() {
    const contentContainer = document.getElementById("content-container");
    const newContentCard = document.createElement("div");
    const newCCHeading = document.createElement("h1");
    const newCCText = document.createElement("p");

    newContentCard.classList.add("content-card");
    newCCHeading.textContent = "Welcome to the Jungle!";
    newCCText.textContent = "Here at Assam Jungle Cafe, we bring you the best cuisine from all across India. Inspired by the the cuisine of my home villiage located near the Dehing Patkai rainforest, Assam Jungle Cafe is your new source for authentic Indian food!";
    newContentCard.appendChild(newCCHeading);
    newContentCard.appendChild(newCCText);
    contentContainer.appendChild(newContentCard);

    // newContentCard.removeChild(newCCText);
    // newContentCard.removeChild(newCCText);
    const secondContentCard = document.createElement("div");
    secondContentCard.classList.add("content-card");
    secondContentCard.appendChild(Object.assign(document.createElement("h1"), {innerHTML:"Operating Hours"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Sunday: 8am - 2pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Monday: 10am - 9pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Tuesday: 10am - 9pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Wednesday: 10am - 9pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Thursday: 10am - 9pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Friday: 10am - 11pm"}));
    secondContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML:"Saturday: 8am - 11pm"}));

    contentContainer.appendChild(secondContentCard);
}

console.log("Things seem to be in order here");


/* Footer stuff
Monkey icon: <a href="https://www.flaticon.com/free-icons/monkey" title="monkey icons">Monkey icons created by Freepik - Flaticon</a>
parrot: <a href="https://www.flaticon.com/free-icons/parrot" title="parrot icons">Parrot icons created by Mihimihi - Flaticon</a>
*/