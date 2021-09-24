const seeBtn = document.querySelector("section:nth-child(1) button");
const artSee = document.querySelector("section:nth-child(1) article");
const addBtn = document.querySelector("body > button");
const valideForm = document.querySelector("body > form");

let valueBtn;
let name;
let firstName;
let gender;
let astroSign;
let id;
let link;

seeBtn.addEventListener("click", () => {
  valueBtn = seeBtn.value;
  link = `see.php`;
  loadData();
});

addBtn.addEventListener("click", () => {
  valideForm.style.transform = "scale(1)";
});

valideForm.addEventListener("submit", (ev) => {
  ev.preventDefault();
  name = document.querySelector("body > form input:nth-child(2)").value;
  firstName = document.querySelector("body > form input:nth-child(4)").value;
  gender = document.querySelector('body > form input[name="gender"]:checked').value;
  astroSign = document.querySelector("body > form select").value;
  await loadData();
  voir();
});

async function loadData() {
  const json = {
    name: `${name}`,
    firstName: `${firstName}`,
    gender: `${gender}`,
    astroSign: `${astroSign}`,
  };
  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch(link, {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  const user = await response.text();

  if (valueBtn == "see") {
    artSee.innerHTML = user;
    const deletBtn = document.querySelectorAll("article div + button");
    const modifyBtn = document.querySelectorAll("article button + button");
    deletBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        id = e.currentTarget.getAttribute("value");
        link = `delete.php`;
        deleteModifyData().then((user) => {
          artSee.innerHTML = user;
        });
      });
    });

    modifyBtn.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        id = e.currentTarget.getAttribute("value");
        link = `modify.php`;
        modifyData().then((user) => {
          document.querySelector(`#div${id}`).innerHTML = user;
          const valideModif = document.querySelector("section > form");
          valideModif.addEventListener("submit", (ev) => {
            ev.preventDefault();
            name = document.querySelector("section > form input:nth-child(1)").value;
            firstName = document.querySelector("section > form input:nth-child(2)").value;
            gender = document.querySelector('section > form input[name="gender"]:checked').value;
            astroSign = document.querySelector("section > form select").value;
            link = `modify_valide.php`;
            deleteModifyData().then((user) => {
              document.querySelector(`#div${id}`).innerHTML = user;
            });
          })
        });
      });
    });
  }
}

async function deleteModifyData() {
  const json = {
    id: `${id}`,
    name: `${name}`,
    firstName: `${firstName}`,
    gender: `${gender}`,
    astroSign: `${astroSign}`,
  };
  const header = {
    "Content-Type": "application/json",
  };
  const response = await fetch(link, {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  const user = await response.text();
  return user;
}

async function modifyData() {
  const json = {
    id: `${id}`,
  };
  const header = {
    "Content-Type": "application/json",
  };
  const response = await fetch(link, {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
  const user = await response.text();

  return user;
}
