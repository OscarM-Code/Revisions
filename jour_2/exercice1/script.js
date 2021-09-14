const btn_1 = document.querySelector("body section:nth-child(1) button");
const btn_2 = document.querySelector("body section:nth-child(2) button");
const btn_3 = document.querySelector("body section:nth-child(3) button");
const btn_4 = document.querySelector("body section:nth-child(4) button");
const regexName = /^[a-zA-Z]*$/;
const regexNumber = /^[0-9.,]*$/;

btn_1.addEventListener("click", () => {
    const result = document.querySelector("body section:nth-child(1) p");
    result.innerHTML = rdmNumber();
});
btn_2.addEventListener("click", () => {
    let getName = document.querySelector("body section:nth-child(2) input").value;
    if(getName != "" && getName.match(regexName)){
        Hello(getName);
    }
})
btn_3.addEventListener("click", () => {
    let price = document.querySelector("body section:nth-child(3) input").value;
    if(price != "" && price.match(regexNumber)){
        document.querySelector("body section:nth-child(3) p").textContent = TVA(price);
    }
})
btn_4.addEventListener("click", () => {
    let getAge = document.querySelector("body section:nth-child(4) input").value;
    if(getAge != "" && getAge.match(regexNumber)){
        age(getAge);
    }
})

function rdmNumber(){
   return Math.floor(Math.random() * 100000000000);
}

function Hello(name) {
    alert(`Hello ${name}`);
}

function TVA(value){
    return value*1.2;
}

function age(age){
    if(age > 1.90){
        alert("Tu es trop grand pour le manège !")
    } else if(age < 1.54){
        alert("Tu es trop petit pour le manège !")
    } else {
        alert("Super, tu peux y aller !")
    }
}