window.addEventListener("load", () => {
    let h2_1 = document.querySelector("body section:nth-child(2) h2");
    let p_1 = document.querySelector("body section:nth-child(2) p");
    const monNom = "Millot";
    const monPrenom = "Oscar";
    h2_1.textContent = `Votre nom est ${monNom}`;
    p_1.textContent = `et votre prenom est ${monPrenom}`;
    console.log(h2_1.value);
})