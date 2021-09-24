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

seeBtn.addEventListener("click", () => {
  valueBtn = seeBtn.value;
  loadData();
});

addBtn.addEventListener("click", () => {
  valideForm.style.transform = "scale(1)";
});

valideForm.addEventListener("submit", async (ev) => {
  ev.preventDefault();
  name = document.querySelector("body > form input:nth-child(2)").value;
  firstName = document.querySelector("body > form input:nth-child(4)").value;
  gender = document.querySelector(
    'body > form input[name="gender"]:checked'
  ).value;
  astroSign = document.querySelector("body > form select").value;
  await addData();
  seeBtn.click();
});

async function loadData() {
  await voir();
  let deleteBtn = document.querySelectorAll("article div p + button");
  let modifyBtn = document.querySelectorAll("article div p + button + button");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      id = e.currentTarget.getAttribute("value");
      await deleteData();
      seeBtn.click();
    });
  });
  modifyBtn.forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      id = e.currentTarget.getAttribute("value");
      modifyBtns().then((user) => {
        document.querySelector(`#div${id}`).innerHTML = user;
        let modifyForm = document.querySelector("article div > form");
        modifyForm.addEventListener("submit", async (ev) => {
          ev.preventDefault();
          name = document.querySelector("article div > form input:nth-child(1)").value;
          firstName = document.querySelector("article div > form input:nth-child(2)").value;
          gender = document.querySelector('article div > form input[name="gender"]:checked').value;
          astroSign = document.querySelector("article div > form select").value;
          await modifyData();
          seeBtn.click();
        })
      })
    });
  });
}

async function voir() {
  const header = {
    "Content-Type": "application/json",
  };

  const response = await fetch("see.php", {
    method: "POST",
    header: header,
  });
  const user = await response.text();
  // const child = document.querySelectorAll("article div");
  let data = JSON.parse(user);
  let i = 0;
  artSee.innerHTML = "";
  while (i < data.length) {
    // if(child.length != 0){
    //     artSee.removeChild(child[i]);
    //   }
    let newDiv = document.createElement("div");
    let newName = document.createElement("p");
    let newFirstName = document.createElement("p");
    let newGender = document.createElement("p");
    let newAstro = document.createElement("p");
    let newDeleteBtn = document.createElement("button");
    let newModifyBtn = document.createElement("button");
    newDiv.id = `div${data[i].id}`;
    newName.textContent = `Name: ${data[i].name}`;
    newDiv.appendChild(newName);
    newFirstName.textContent = `First name: ${data[i].first_name}`;
    newDiv.appendChild(newFirstName);
    newGender.textContent = `Gender: ${data[i].gender}`;
    newDiv.appendChild(newGender);
    newAstro.textContent = `Astro sign: ${data[i].astro}`;
    newDiv.appendChild(newAstro);
    newDeleteBtn.value = data[i].id;
    newDeleteBtn.textContent = "Delete -";
    newDiv.appendChild(newDeleteBtn);
    newModifyBtn.value = data[i].id;
    newModifyBtn.textContent = "Modify";
    newDiv.appendChild(newModifyBtn);
    artSee.appendChild(newDiv);
    i++;
  }

}

async function deleteData() {
  const json = {
    id: `${id}`,
  };
  const header = {
    "Content-Type": "application/json",
  };
  await fetch("delete.php", {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });

  // await voir();
  // const user = await response.text();
  // return user
}

async function addData() {
  const json = {
    name: `${name}`,
    firstName: `${firstName}`,
    gender: `${gender}`,
    astroSign: `${astroSign}`,
  };
  const header = {
    "Content-Type": "application/json",
  };

  await fetch("add.php", {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
}

async function modifyBtns() {
  const json = {
    id: `${id}`,
  };
  const header = {
    "Content-Type": "application/json",
  };
  const response = await fetch("modify.php", {
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
    name: `${name}`,
    firstName: `${firstName}`,
    gender: `${gender}`,
    astroSign: `${astroSign}`,
  };
  const header = {
    "Content-Type": "application/json",
  };

  await fetch("modify_valide.php", {
    method: "POST",
    header: header,
    body: JSON.stringify(json),
  });
}
