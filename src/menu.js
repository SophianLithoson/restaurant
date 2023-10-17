import harvestBowlPic from "./harvest_bowl_s.jpg";
import naanPic from "./Naan_s.jpg";
import tanBinhPic from "./tan_binh_s.jpg";

function menuContent() {
    console.log("function menuContent() triggered");

    const contentContainer = document.getElementById("content-container");
    contentContainer.innerHTML = "";

    const firstMenuItem = document.createElement("div");
    firstMenuItem.classList.add("content-card");
    firstMenuItem.appendChild(Object.assign(new Image(120, 120), {src: naanPic, style: "float: left; margin-right: 5px; object-fit: cover;"}));
    firstMenuItem.appendChild(Object.assign(document.createElement("h1"), {innerHTML: "Naan - 5"}));
    firstMenuItem.appendChild(Object.assign(document.createElement("p"), {innerHTML: "Our fresh naan is to die for! Brushed with garlic butter and served with your choice of sauces or chutney"}));
    contentContainer.appendChild(firstMenuItem);

    const secondMenuItem = document.createElement("div");
    secondMenuItem.classList.add("content-card");
    secondMenuItem.appendChild(Object.assign(new Image(120, 120), {src: harvestBowlPic, style: "float: left; margin-right: 5px; object-fit: cover;"}));
    secondMenuItem.appendChild(Object.assign(document.createElement("h1"), {innerHTML: "Harvest Bowl - 10"}));
    secondMenuItem.appendChild(Object.assign(document.createElement("p"), {innerHTML: "Our House specialty. Strips of fried sweet potatos covered in local produce and served with chutney and raita."}));
    contentContainer.appendChild(secondMenuItem);


    const thirdMenuItem = document.createElement("div");
    thirdMenuItem.classList.add("content-card");
    thirdMenuItem.appendChild(Object.assign(new Image(120, 120), {src: tanBinhPic, style: "float: left; margin-right: 5px; object-fit: cover;"}));
    thirdMenuItem.appendChild(Object.assign(document.createElement("h1"), {innerHTML: "Tan Binh - 12"}));
    thirdMenuItem.appendChild(Object.assign(document.createElement("p"), {innerHTML: "A delicious stew inpired by cuisine from the Tan Binh region of Vietnam. Served with prawns, local chilies, and fish balls in a rich seafood broth"}));
    contentContainer.appendChild(thirdMenuItem);
}

export default menuContent;