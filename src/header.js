import logoImport from './img/Coffee-Hub-Logo.png';

function header() {
  let header = document.createElement('HEADER');

  let logo = document.createElement('img');
  header.append(logo);

  logo.src = logoImport;
  logo.id = "logoID"
 
  let list = document.createElement('ul')
  header.append(list);

  let listArray = ["Home","Menu", "About"];
  for (let i = 0; i < listArray.length; i++) {
    let listItem = document.createElement('li');
    list.append(listItem);
    listItem.classList.add("listClass", `listClass${listArray[i]}`); 
    listItem.textContent = listArray[i];
  }
return header
};

export default header;