import parrotIcon from "./parrot.png";

function homeContent() {
    const contentContainer = document.getElementById("content-container");
    const newContentCard = document.createElement("div");
    const newCCHeading = document.createElement("h1");
    const newCCText = document.createElement("p");

    contentContainer.innerHTML = "";
    newContentCard.classList.add("content-card");
    newCCHeading.textContent = "Welcome to the Jungle!";
    newCCText.textContent = "Here at Assam Jungle Cafe, we bring you the best cuisine from all across India. Inspired by the the cuisine of my home villiage located near the Dehing Patkai rainforest, Assam Jungle Cafe is your new source for authentic Indian food!";
    newContentCard.appendChild(Object.assign(new Image(110, 110), {src: parrotIcon, style: "float: right; padding-left: 5px"}));
    newContentCard.appendChild(newCCHeading);
    newContentCard.appendChild(newCCText);
    contentContainer.appendChild(newContentCard);

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

export default homeContent;