window.addEventListener("load", () => {
    const h2_1 = document.querySelector("body section:nth-child(2) h2");
    const p_1 = document.querySelector("body section:nth-child(2) p");
    const monNom = "Millot";
    const monPrenom = "Oscar";
    h2_1.textContent = `Votre nom est ${monNom}`;
    p_1.textContent = `et votre prenom est ${monPrenom}`;
})

const div_2 = document.querySelector("body section:nth-child(3) div");
const btn_3 = document.querySelector("body section:nth-child(4) button");

div_2.addEventListener("click", () => {
    div_2.style.borderRadius = "50%";
    div_2.style.background = "RGB(222, 49, 99)";
})

btn_3.addEventListener("click", () => {
    const section_3 = document.querySelector("body section:nth-child(4)");
    const newMoovie = document.querySelector("body section:nth-child(4) button + p");
    const allMoovies = ["Interstellar", "Inception", "Tenet", "Your Name", "How High"];
    let rdmMoovie = Math.floor(Math.random() * allMoovies.length);
    let moovie = document.createElement("p");
    moovie.textContent = allMoovies[rdmMoovie];
    if(newMoovie != null){
        section_3.removeChild(newMoovie);
    }
    section_3.appendChild(moovie);
})

