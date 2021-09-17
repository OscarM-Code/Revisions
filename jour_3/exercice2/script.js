let seeBtn = document.querySelector("section:nth-child(1) button");

seeBtn.addEventListener("click", () => {
  loadData();
});

async function loadData() {
  const json = [{ name: "Oscar" }];
  const header = {
    "Accept": "application/json",
    "Content-Type": "application/json",
  };

  const response = await fetch(`see.php`, {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  console.log(JSON.stringify(json));
  const user = await response.text();
  document.body.innerHTML = user;
}