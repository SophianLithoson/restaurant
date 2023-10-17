import monkeyIcon from "./monkey.png";

function contactContent() {
    console.log("function contactContent() triggered");

    const contentContainer = document.getElementById("content-container");
    const newContentCard = document.createElement("div");
    
    contentContainer.innerHTML = "";
    newContentCard.classList.add("content-card");
    newContentCard.style = "min-width: 380px;"
    newContentCard.appendChild(Object.assign(new Image(150, 150), {src: monkeyIcon, style: "float: left; padding-right: 5px;"}));
    newContentCard.appendChild(Object.assign(document.createElement("h1"), {innerHTML: "Contact Us"}));
    newContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML: "Telephone: (888) 555-5555"}));
    newContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML: "Email: very@real.com"}));
    newContentCard.appendChild(Object.assign(document.createElement("p"), {innerHTML: "Address: 123 Main St, Anywhere, CO 80555"}));

    contentContainer.appendChild(newContentCard);
}

export default contactContent;