window.addEventListener("load", () => {
    const h2_1 = document.querySelector("body section:nth-child(2) h2");
    const p_1 = document.querySelector("body section:nth-child(2) p");
    const monNom = "Millot";
    const monPrenom = "Oscar";
    h2_1.textContent = `Votre nom est ${monNom}`;
    p_1.textContent = `et votre prenom est ${monPrenom}`;
})

const div_2 = document.querySelector("div");
const btn_3 = document.querySelector("body section:nth-child(4) button");
const btn_4 = document.querySelector("body section:nth-child(5) button");
const btn_5 = document.querySelector("body section:nth-child(6) button");

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

btn_4.addEventListener("click", () => {
    let str = document.querySelector("body section:nth-child(5) input").value;
    let i = 0;
    let newStr = "";
    while(i < str.length){
            let letter = str.charAt(i);
            if(letter == letter.toUpperCase()){
                    newStr += letter.toLowerCase();
                } else {
            newStr += letter.toUpperCase();
        }
        i++;
    }
    document.querySelector("body section:nth-child(5) p").innerHTML = newStr;
})

btn_5.addEventListener("click", () => {
    const getPswd = document.querySelector("body section:nth-child(6) p");
    let rdm = Math.floor(Math.random() * (16 - 8 + 1) + 8)
    var buf = new Uint8Array(rdm);
    crypto.getRandomValues(buf);
    let password = btoa(String.fromCharCode.apply(null, buf));
    getPswd.textContent = password;
})