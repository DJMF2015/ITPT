
var itemsData = [
  {name: 'Apples', quantity: 3.0, image: 'apple.png'},
  {name: 'Pears', quantity: 4.0, image: 'pears.jpg'},
  {name: 'Banana', quantity: 3.0, image: 'banana.jpg'},
  {name: 'Tuna', quantity: 1.0, image: 'tuna.jpg'}
];

//setup event handlers
document.addEventListener('DOMContentLoaded', () => {
  const clearAllBtn = document.querySelector('#clearBtn')
  const removeBtn = document.querySelector('#removeBtn')


  const newItem = document.querySelector('form');
  newItem.addEventListener('submit', newSubmitHandler); //1
  clearAllBtn.addEventListener('click', handleClearAll);
  // removeBtn.addEventListener('click',removeItem);

  //loop of radio btn options and on click register color change
  let btns = document.querySelectorAll("[name=color]");
  for (let button of Array.from(btns)) {
    button.addEventListener('change', ()=> {
      document.body.style.background=button.value;
    });
  }
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
  span.textContent =  'Item: ';
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
}

// const removeItem = function(){
//   // const remove =  itemsData.splice(-1);
//   const list = document.querySelector('#list');
//   itemsData.pop()
//   itemsData[0]  = ''
//   // list.childNode.remove()
//   console.log(itemsData)
//   // console.log(remove)
// };


const handleClearAll = function(){
  const clearBtn = document.querySelector('#list');
  clearBtn.innerHTML = '';
}


// function trigger(){
//   var data = document.getElementById("index1").value;
//   items.push(data);
//
//
// }
//
// function check(){
//   for (i = 0, len = items.length, text = ""; i < len; i++) {
//     text += "<li>" + items[i] + "<br>";
//     document.getElementById('demo').innerHTML = text;
//   }
//
// }
// function remove(){
//   items.pop();
//
// }
// function removeElement(parentDiv, childDiv){
//      if (childDiv == parentDiv) {
//           alert("The parent div cannot be removed.");
//      }
//      else if (document.getElementById(childDiv)) {
//           var child = document.getElementById(childDiv);
//           var parent = document.getElementById(parentDiv);
//           parent.removeChild(child);
//
//      }
//      else {
//           prompt("Child div has already been removed or does not exist.");
//           return false;
//      }
//
// }
