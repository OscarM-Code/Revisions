let price = Math.floor(Math.random() * 1000);

const getPrice = document.querySelector("input");
const moreOrLess = document.querySelector("button + p");
const valide = document.querySelector("input + button");
let i = 0;


valide.addEventListener("click", () => {
    if(getPrice.value > price && getPrice.value != ""){
        moreOrLess.textContent = "C'est moins !";
        i++
    } else if(getPrice.value < price && getPrice.value != ""){
        moreOrLess.textContent = "C'est plus !";
        i++;
    } else if (getPrice.value == price && getPrice.value != ""){
        moreOrLess.textContent = "Bonne chance !";
        i++;
        getPrice.value = "";
        price = Math.floor(Math.random() * 1000);
        window.alert(`Bravo, tu l'as trouvé en ${i} coups !`);
    } else {
        moreOrLess.textContent = "Vous devez entrer un nombre correct."
    }
})

getPrice.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        if(getPrice.value > price && getPrice.value != ""){
            moreOrLess.textContent = "C'est moins !";
            i++
        } else if(getPrice.value < price && getPrice.value != ""){
            moreOrLess.textContent = "C'est plus !";
            i++;
        } else if (getPrice.value == price && getPrice.value != ""){
            moreOrLess.textContent = "Bonne chance !";
            i++;
            getPrice.value = "";
            price = Math.floor(Math.random() * 1000);
            window.alert(`Bravo, tu l'as trouvé en ${i} coups !`);
        } else {
            moreOrLess.textContent = "Vous devez entrer un nombre correct."
        }
    }
});