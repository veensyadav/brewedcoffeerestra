import header from './header.js';
import companyPicImport from "./img/store.jpg";
import coffeePicImport from './img/contact-coffee.jpeg';

function about() {
  const container = document.createElement('div');
  container.id = "aboutContainer"

  // <-------> //
  const topContent = document.createElement('div');
  container.append(topContent);
  topContent.classList.add('containerClass', 'about');

  topContent.append(header());

  // <-------> //
  const titleAbout = document.createElement('h1');
  topContent.append(titleAbout);
  titleAbout.textContent = "ABOUT US";

  // <-------> //
  const bottomContent = document.createElement('div');
  container.append(bottomContent);

   // <-------> //
  const OurContainer = document.createElement('div');
  bottomContent.append(OurContainer);
  OurContainer.classList.add('outer'); 

  const OurCompanyTextDiv = document.createElement('div');
  OurContainer.append(OurCompanyTextDiv);
  OurCompanyTextDiv.classList.add('company', 'text'); 

  const company = document.createElement('h2');
  OurCompanyTextDiv.append(company);
  company.textContent = "OUR COMPANY";

  const companyParagraph = document.createElement('p');
  OurCompanyTextDiv.append(companyParagraph);
  companyParagraph.textContent = "Brewed Coffee Hub is a coffee experience located on Earth. We have a full menu, including all your favorite drinks and a delicious selection of pastries.";

  const obs = document.createElement('p');
  OurCompanyTextDiv.append(obs);
  obs.textContent = "PS: This is not a real company or website. It's our imagination";

  const companyPic = document.createElement('img');
  OurContainer.append(companyPic);
  companyPic.src = companyPicImport;
  companyPic.alt = 'Store Picture';
  companyPic.setAttribute('loading', "lazy");

// <----------> //
  const coffeePic = document.createElement('img');
  OurContainer.append(coffeePic);
  coffeePic.src = coffeePicImport;
  coffeePic.alt = 'Store Picture';
  coffeePic.setAttribute('loading', "lazy");

  const OurCoffeeTextDiv = document.createElement('div');
  OurContainer.append(OurCoffeeTextDiv);
  OurCoffeeTextDiv.classList.add('coffee', 'text'); 

  const coffee = document.createElement('h2');
  OurCoffeeTextDiv.append(coffee);
  coffee.textContent = "OUR COFFEE";

  const coffeeParagraph = document.createElement('p');
  OurCoffeeTextDiv.append(coffeeParagraph);
  coffeeParagraph.textContent = "It takes many hands to craft the perfect cup of coffee – from the farmers who tend to the red-ripe coffee cherries, to the barista who serves it with care. We are committed to the highest standards of quality and service, creating tasteful experiences to our clients.";

  // <-------> //
  const contactContainer = document.createElement('div');
  bottomContent.append(contactContainer);
  contactContainer.classList.add('contactContainer'); 

  // <-------> //
  const contactBox = document.createElement('div');
  contactContainer.append(contactBox);
  
  const contactTitle = document.createElement('h2');
  contactBox.append(contactTitle);
  contactTitle.textContent = "CONTACT US";

  const hours = document.createElement('p');
  contactBox.append(hours);
  hours.textContent = "Monday - Monday \r\n 07:00AM - 09:00PM";

  const address = document.createElement('p');
  contactBox.append(address);
  address.textContent = "1 XYZ Street \r\n ABC Country 1234 ";

  const companyEmail = document.createElement('p');
  contactBox.append(companyEmail);
  companyEmail.textContent = "123-4567892 \r\n brewedcoffeehub@gmail.com";


  return container
}

export default about;

