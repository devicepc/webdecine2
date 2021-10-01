let el, i;
let data = [
  { firstname: "Mauricio", lastname: "Sevilla", fechaPel:"19/06/2021", funcionPel:" 12:30"},
  { firstname: "Jorge", lastname: "Barón" , fechaPel:"19/06/2021", funcionPel:" 12:30"},
  { firstname: "Andrés", lastname: "Espinoza" , fechaPel:"19/06/2021", funcionPel:" 12:30"},
  { firstname: "Rafael", lastname: "Pérez" , fechaPel:"19/06/2021", funcionPel:" 12:30"}
];
let panel = document.querySelector("#panel");


function clearForm() {
  document.querySelector("#fname").value = "";
  document.querySelector("#lname").value = "";
  document.querySelector("#Date").value = "";
  document.querySelector("#Cinema").value = "";
}

function renderItem() {

  panel.textContent = "";
  data.forEach(x => {
    el = document.createElement("option");
    el.innerText = `${x.firstname} ${x.lastname} ${x.fechaPel} ${x.funcionPel}`;
    panel.append(el);
  });
}

function create() {
  let fn = document.querySelector("#fname").value;
  let ln = document.querySelector("#lname").value;
  let fecha = document.querySelector("#Date").value;
  let cinema = document.querySelector("#Cinema").value;
  data = [...data, { firstname: fn, lastname: ln, fechaPel: fecha, funcionPel: cinema }];
  clearForm();
  console.log(data)
  renderItem();
}

function panelClick() {
  i = panel.selectedIndex;
  document.querySelector("#fname").value = data[i].firstname;
  document.querySelector("#lname").value = data[i].lastname;
  document.querySelector("#Date").value = data[i].fechaPel;
  document.querySelector("#Cinema").value = data[i].funcionPel;
}

function update() {
  data[i].firstname = document.querySelector("#fname").value;
  data[i].lastname = document.querySelector("#lname").value;
  data[i].fechaPel = document.querySelector("#Date").value;
  data[i].funcionPel = document.querySelector("#Cinema").value;
  renderItem();
}

function deleteItem() {
  data.splice(i, 1);
  renderItem();
}

 renderItem();