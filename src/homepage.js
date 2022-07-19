import header from './header.js';
import pic1Import from './img/pic1.jpeg';
import pic2Import from './img/coffee-cup.webp';//
import pic3Import from './img/pic 3.jpeg';


function homepage() {
  // <-------> //
  const container = document.createElement('div');

  const topSection = document.createElement('section');
  container.append(topSection);
  topSection.classList.add('containerClass'); 

  // <-------> //
  topSection.append(header());
  
  const paragraph = document.createElement('h1')
  topSection.append(paragraph);
  paragraph.textContent = "Welcome to Brewed Coffee HUB"

  // <-------> //
  const main = document.createElement('main')
  container.append(main);

  // <-------> //
  const discover = document.createElement('div')
  main.append(discover);
  discover.id = "discover"

  const discoverTitle = document.createElement('h2')
  discoverTitle.innerText = "DISCOVER"
  discover.append(discoverTitle);

  const pArray = ["High Quality Ingredients",
  "We strive to use in our products premium and organic ingredients.",
  "Made Fresh",
  "Handcrafted recipes are made from scratch in our kitchen daily.",
  "Unique Flavours", 
  "Treat your taste buds and try something new from our delicious menu."];
  for (let i = 0; i < pArray.length; i++) {
    let p = document.createElement('p');
    discover.append(p);
    p.textContent = pArray[i];
  }

  const pic1 = document.createElement('img');
  discover.append(pic1);
  pic1.src = pic1Import;
  pic1.alt = 'Beverages';

  const pic2 = document.createElement('img');
  discover.append(pic2);
  pic2.src = pic2Import;
  pic2.alt = 'Beverages';
  
  const pic3 = document.createElement('img');
  discover.append(pic3);
  pic3.src = pic3Import;
  pic3.alt = 'Beverages';

  // <-------> //
  const menuDiv = document.createElement('div')
  main.append(menuDiv);
  menuDiv.id = "menuDiv"
  
  const menuTitle = document.createElement('h1')
  menuDiv.append(menuTitle);
  menuTitle.textContent = "SPECIALTY DRINKS AND PASTRIES"
  const menuParagraph = document.createElement('p')
  menuDiv.append(menuParagraph);
  menuParagraph.textContent = "Our menu offers a wide selection of drink and food, from freshly-brewed roasted coffees to cold beverages, baked goods to fresh sandwiches, each sip and bite leaving you wanting more. We also include dairy-free, gluten-free, and vegan options to ensure every person that walks in our doors can be served."
  


  return container;
};

export default homepage;
