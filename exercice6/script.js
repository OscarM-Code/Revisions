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
        document.body.style.background = "yellow";
    } else {
        document.body.style.background = "white";
    }
    console.log(e.key);
})