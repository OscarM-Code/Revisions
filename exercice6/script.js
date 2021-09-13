let toto = document.querySelector("button");

window.addEventListener("load", () => {
    document.body.style.background = "black";
})

window.addEventListener("keydown", (e) => { 
    if (e.key === 'r') {
        document.body.style.background = "red";
    } else if (e.key === 'g') {
        document.body.style.background = "green";
    } else if (e.key === 'b') {
        document.body.style.background = "blue";
    } else if (e.key === 'p') {
        document.body.style.background = "pink";
    } else if (e.key === 'y') {
        document.body.style.background = "yellow";
    } else if (e.key === 'ArrowUp') {
        toto.style.display = "block";
    } else {
        document.body.style.background = "white";
    }
})

toto.addEventListener("click", () => {

    let userDate = prompt("Entrez votre date de naissance (dd/mm/yyyy)");
    let date = userDate.split("/");
    let d1 = new Date();
    let d2 = new Date(date[2], date[1], date[0]);
    let days = Math.floor((d1 - d2) / (1000 *60 *60 * 24));
    if((days/364) >= 25){
        alert("Bienvenue");
    } else {
        let x = ((25 * 364) - days);
        alert(`Il faut attendre encore ${x} jours`);
        console.log(x);
    }
    // alert("alert - Hello, " + name + "! You can't enter text here!");

})