let seeBtn = document.querySelector("section:nth-child(1) button");

seeBtn.addEventListener("click", async() => {
    const url = "see.php";
    const options = {
        method: "POST"
    }

    const response = await fetch(url, options);
    // const user = await response.json();
    
    console.log(response);
})