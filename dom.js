//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID

// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
headerTitle.innerHTML = '<h3>Hello</h3>';
header.style.borderBottom = 'solid 3px black';

// GETELEMENTSBYCLASSNAME

// console.log(document.getElementsByClassName('title'))
var addItemTitle = document.getElementsByClassName('title');
addItemTitle[0].style.fontWeight = 'bold'; // Make it bold
addItemTitle[0].style.color = 'green'; // Change font color to green

// GETELEMENTSBYCLASSNAME

var items = document.getElementsByClassName('list-group-item');
// console.log(items);
items[2].style.backgroundColor = 'green';

// items.style.fontWeight = 'bold'; //Do not work because, it is an array form

for(var i = 0; i < items.length; i++)
{
    items[i].style.fontWeight = 'bold';
}

//GETELEMENTSBYTAGNAME

var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
li[1].textContent = 'HElloS';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(var i = 0; i < li.length; i++)
{
    li[i].style.backgroundColor = 'grey';
}

// QUERYSELECTOR

var header = document.querySelector('#main-header');
// console.log(header);
header.style.borderBottom = 'solid 4px brown';

var input = document.querySelector('input');
input.value = 'Hello World'; 

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

// QUERSELECTORALL

var odd = document.querySelectorAll('.list-group-item');
// console.log(odd);
for(var i = 0; i < odd.length; i++)
{
    odd[i].style.backgroundColor = 'green';
}
