const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const clearAllButton = document.getElementById('clearAllButton');

let shoppingList = [];

addItemButton.addEventListener('click', addItem);

function addItem() {
  const item = itemInput.value;
  shoppingList.push(item);
  
  itemInput.value = '';
}

clearAllButton.addEventListener('click', clearAll);

function clearAll() {
  shoppingList = [];
  const listItems = document.querySelectorAll('li');
  listItems.forEach(item => item.remove());
}

function renderShoppingList() {
  const root = document.getElementById('root');
  
  const list = document.createElement('ul');
  
  shoppingList.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  });
  
  const existingList = document.querySelector('ul');
  if (existingList) {
    root.replaceChild(list, existingList);
  } else {
    root.appendChild(list);
  }
}

renderShoppingList();

addItemButton.addEventListener('click', renderShoppingList);
