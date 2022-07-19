import header from './header.js';

function menu() {
  const container = document.createElement('div');
  container.classList.add('containerClass', 'menu');

  container.append(header());

  // <-------> //
  const mainMenu = document.createElement('main');
  container.append(mainMenu);

  const menuTitle = document.createElement('div');
  mainMenu.append(menuTitle);
  menuTitle.classList.add('divTitle', 'title');
  const title = document.createElement('h1');
  menuTitle.append(title);
  title.textContent = "OUR'S MENU"
  const line = document.createElement('span');
  menuTitle.append(line);

  // <-------> //
  const gridMenu = document.createElement('div');
  mainMenu.append(gridMenu);
  gridMenu.id = "gridMenuID"

  const espressoMenu = document.createElement('div');
  gridMenu.append(espressoMenu);
  espressoMenu.classList.add('espresso', 'menu');

  const icedMenu = document.createElement('div');
  gridMenu.append(icedMenu);
  icedMenu.classList.add('iced', 'menu');

  const frappMenu = document.createElement('div');
  gridMenu.append(frappMenu);
  frappMenu.classList.add('frapp', 'menu');

  const pastryMenu = document.createElement('div');
  gridMenu.append(pastryMenu);
  pastryMenu.classList.add('pastry', 'menu');

  const espressoArray = ["Espresso",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Caramel Macchiato",
  306, 363, 387,
  "Caffe Latte",
  241, 298, 324,];
  const icedArray = ["Iced Espresso",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Iced Vanilla Latte",
  282, 338, 380,
  "Iced Cafe Mocha",
  282, 338, 380,];
  const frappArray = ["Frappuccino",
  "",
  "",
  "Tall", "Grande", "Venti",
  "Coffee Frappuccino",
  290, 350, 450,
  "Hazelnut Frappuccino",
  300, 360, 460,]
  const pastryArray = ["Pastry",
  "",
  "Banana loaf", 325,
  "Croissant", 275,
  "Birthday Cake Pop", 225

  ];
  espressoArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    espressoMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  icedArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    icedMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  frappArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    frappMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });
  pastryArray.forEach(element => {
    const item = document.createElement('p');
    item.innerText = element;
    pastryMenu.appendChild(item);
    if (typeof element === "number"){
      item.classList.add('price')
      }
  });

  return container
}

export default menu;