const seeBtn = document.querySelector("section:nth-child(1) button");
const artSee = document.querySelector("section:nth-child(1) article");
const addBtn = document.querySelector("body > button");
const valideForm = document.querySelector("form");

let valueBtn;
let name;
let firstName;
let gender;
let astroSign;
let id;

seeBtn.addEventListener("click", () => {
  valueBtn = seeBtn.value;
  console.log(valueBtn);
  loadData();
});

addBtn.addEventListener("click", () => {
  valideForm.style.transform = "scale(1)";
})

valideForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  name = document.querySelector("form input:nth-child(2)").value;
  firstName = document.querySelector("form input:nth-child(4)").value;
  gender = document.querySelector('input[name="gender"]:checked').value;
  astroSign = document.querySelector('select').value;
  loadData();
})

async function loadData() {
  const json = { value: `${valueBtn}`, id: ``, name: `${name}`, firstName: `${firstName}`, gender: `${gender}`, astroSign: `${astroSign}` };
  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(`action.php`, {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  const user = await response.text();
  
  if(valueBtn == "see"){
    artSee.innerHTML = user;
    const deletBtn = document.querySelectorAll("article button");
    deletBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        id = e.currentTarget.getAttribute("value");
        console.log(id);
      })
    })
  }
}

async function deleteData(){
  const json = { id: `${id}` };
  const header = {
    "Content-Type": "application/json",
  };
  const response = await fetch("action.php", {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  const user = await response.text();
  artSee.innerHTML = user;
}