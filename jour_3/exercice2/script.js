let seeBtn = document.querySelector("section:nth-child(1) button");

seeBtn.addEventListener("click", () => {
    const url = "see.php";
    const options = {
        method: "POST"
    }

    fetch(url, options)
        .then(function(response))
    console.log(options);
})