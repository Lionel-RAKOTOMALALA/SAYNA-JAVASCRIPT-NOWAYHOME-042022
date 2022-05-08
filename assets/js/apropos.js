// code qui souligne les menus au survole
const underline = document.querySelectorAll("li");

for (let line of underline) {
    line.addEventListener("mouseover", (n) => {
        n.preventDefault();
        line.style.borderBottom = "2px solid #ffffff";
        if (line.classList.contains("list_")) {
            line.style.borderBottom = "none";
        }
    });
    line.addEventListener("mouseout", (n) => {
        n.preventDefault();
        line.style.borderBottom = "none";
    });
}
// texte fondu de gauche à droite avec un effet translate 
const grandTitre = document.querySelector(".titre");
const titleContent = grandTitre.textContent;
var x = 0;

// texte fondu avec un effet opacity 
const petitTitre = document.querySelector(".description");

function opacityPetitTitre() {
    petitTitre.style.opacity = x;
    if (x < 1) {
        setTimeout("opacityPetitTitre()", 100);
        x = x + 0.1;
    }
}

grandTitre.style.transform = "translateX(0%)"
opacityPetitTitre();
// hover: effet line bottom
const lineBottom = document.querySelectorAll("li");

for (let line of lineBottom) {
    line.addEventListener("mouseover", (x) => {
        x.preventDefault();
        line.style.borderBottom = "2px solid #ffffff";
        if (line.classList.contains("list_")) {
            line.style.borderBottom = "none";
        }
    });
    line.addEventListener("mouseout", (x) => {
        x.preventDefault();
        line.style.borderBottom = "none";
    });
}
// logo hover
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");
const collectionOfLogo = [
    ["./assets/logo/logof.png", "./assets/logo/logoi.png", "./assets/logo/logot.png", "./assets/logo/logoy.png"],
    ["./assets/logo/logof-white.png", "./assets/logo/logoi-white.png", "./assets/logo/logot-white.png", "./assets/logo/logoy-white.png"]
];

img1.addEventListener("mouseover", () => {img1.src = collectionOfLogo[1][0]});
img1.addEventListener("mouseout", () => {img1.src = collectionOfLogo[0][0]});

img2.addEventListener("mouseover", () => {img2.src = collectionOfLogo[1][1]});
img2.addEventListener("mouseout", () => {img2.src = collectionOfLogo[0][1]});

img3.addEventListener("mouseover", () => {img3.src = collectionOfLogo[1][2]});
img3.addEventListener("mouseout", () => {img3.src = collectionOfLogo[0][2]});

img4.addEventListener("mouseover", () => {img4.src = collectionOfLogo[1][3]});
img4.addEventListener("mouseout", () => {img4.src = collectionOfLogo[0][3]});


