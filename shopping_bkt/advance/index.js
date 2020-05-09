
var itemsData = [
  {name: 'Apples', quantity: 3.0, image: 'apple.png'},
  {name: 'Pears', quantity: 4.0, image: 'pear.png'},
  {name: 'Banana', quantity: 3.0, image: 'banana.png'},
  {name: 'Tuna', quantity: 1.0, image: 'tuna.png'}
];

//setup event handlers
document.addEventListener('DOMContentLoaded', () => {
  const clearAllBtn = document.querySelector('#clearBtn')
  const removeBtn = document.querySelector('#removeBtn')


  const newItem = document.querySelector('form');
  newItem.addEventListener('submit', newSubmitHandler); //1
  clearAllBtn.addEventListener('click', handleClearAll);
  if (removeBtn.addEventListener('click', removeItem)){
  };

  //populate basket with items
  itemsData.forEach((item) => {
    const li = createListItem(item); //1
    addListItem(li);//2
  });
});

const newSubmitHandler = function(event){
  event.preventDefault();
  const form = event.target;
  renderListItemFromInput(form)//2

  form.reset();
}

const renderListItemFromInput = function(form) {
  const basket = formValues(form);//3
  const listItem = createListItem(basket);//4
  addListItem(listItem);//5
}

const formValues = (form) => ({
  name: form.name.value,
  quantity: form.quantity.value,
  image: form.image
});


const createListItem = function(item) {

  const li = document.createElement('li');
  const span = document.createElement('span');
  span.classList.add('label')
  li.appendChild(span);

  const basketSpanName = document.createElement('span');
  basketSpanName.classList.add('name');
  basketSpanName.textContent = item.name+ ': '
  li.appendChild(basketSpanName);


  const span2 = document.createElement('span');
  span2.classList.add('label')
  span2.textContent =  'Qty: ';
  li.appendChild(span2);

  const basketSpanPrice = document.createElement('span');
  basketSpanPrice.classList.add('price');
  basketSpanPrice.textContent = item.quantity ;
  li.appendChild(basketSpanPrice);

  const imageSpan = document.createElement('span')
  imageSpan.classList.add('image')
  const image = document.createElement('img');
  image.src = `${item.image}`;
  li.appendChild(image);
  li.appendChild(imageSpan)



  return li;
};

const addListItem = function(listItem){
  const listContainer = document.querySelector('#list');
  listContainer.appendChild(listItem);
  itemsData.push(listItem)
}


const removeItem = function(){
  var elem = document.querySelector('#list');
  if (elem.parentNode.hasChildNodes()) {
    elem.removeChild(elem.childNodes[0]);
  }
}

const handleClearAll = function(){
  const clearBtn = document.querySelector('#list');
  clearBtn.innerHTML = '';
}
