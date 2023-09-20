// //EXAMINE THE DOCUMENT OBJECT

// //console.dir(document);

// // console.log(document.domain);
// // console.log(document.URL);
// // console.log(document.title);
// // // document.title = 123
// // console.log(document.doctype);
// // console.log(document.head);
// // console.log(document.body);
// // console.log(document.all);
// // console.log(document.all[10]);
// // // document.all[10].textContent = "Hello";
// // console.log(document.forms[0]);
// // console.log(document.links);
// // console.log(document.images);

// // GETELEMENTBYID

// // console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// // console.log(headerTitle);
// // headerTitle.textContent = 'Hello';
// // headerTitle.innerText = 'Goodbye';
// // console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px black';

// // GETELEMENTSBYCLASSNAME

// // console.log(document.getElementsByClassName('title'))
// var addItemTitle = document.getElementsByClassName('title');
// addItemTitle[0].style.fontWeight = 'bold'; // Make it bold
// addItemTitle[0].style.color = 'green'; // Change font color to green

// // GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// // console.log(items);
// items[2].style.backgroundColor = 'green';

// // items.style.fontWeight = 'bold'; //Do not work because, it is an array form

// for(var i = 0; i < items.length; i++)
// {
//     items[i].style.fontWeight = 'bold';
// }

// //GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// // console.log(li);
// // console.log(li[1]);
// li[1].textContent = 'HElloS';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(var i = 0; i < li.length; i++)
// {
//     li[i].style.backgroundColor = 'grey';
// }

// // QUERYSELECTOR

// var header = document.querySelector('#main-header');
// // console.log(header);
// header.style.borderBottom = 'solid 4px brown';

// var input = document.querySelector('input');
// input.value = 'Hello World'; 

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.display = 'none';

// // QUERSELECTORALL

// var odd = document.querySelectorAll('.list-group-item');
// // console.log(odd);
// for(var i = 0; i < odd.length; i++)
// {
//     odd[i].style.backgroundColor = 'green';
// }


// TRAVERSING THE DOM 

var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'grey';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'grey';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';





// FirstChild
console.log(itemList.firstChild);
// firstElementChild
console.log(itemList.firstElementChild);

// Select the ul element with id "items"
var itemList = document.getElementById("items");

// Select the first child of the ul (which is the first li element)
var firstItem = itemList.firstElementChild;

// Add "Hello 1" before the existing text content of the first li element
firstItem.textContent = 'Hello 1 ' + firstItem.textContent;






// // lastChild
// console.log(itemList.lastChild);
// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';






// Create a div
var newDiv = document.createElement('div');

// Add class
newDiv.className = 'hello';

// Add id
newDiv.id = 'hello1';

// Add attr
newDiv.setAttribute('title', 'Hello Div');

// Create text node
var newDivText = document.createTextNode('Hello World');

// Add text to div
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);

container.insertBefore(newDiv, h1);