window.addEventListener("load", () => {
    const h2_1 = document.querySelector("body section:nth-child(2) h2");
    const p_1 = document.querySelector("body section:nth-child(2) p");
    const monNom = "Millot";
    const monPrenom = "Oscar";
    h2_1.textContent = `Votre nom est ${monNom}`;
    p_1.textContent = `et votre prenom est ${monPrenom}`;
})

const div_2 = document.querySelector("body section:nth-child(3) div");

div_2.addEventListener("click", () => {
    div_2.style.borderRadius = "50%";
    div_2.style.background = "RGB(222, 49, 99)";
})