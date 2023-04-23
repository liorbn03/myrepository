const firstChild = document.getElementById("parent").firstElementChild;
console.log(firstChild);

const lastChild = document.getElementById("parent").lastElementChild;
console.log(lastChild);

const nextSibling = firstChild.nextElementSibling;
console.log(nextSibling);

const previousSibling = lastChild.previousElementSibling;
console.log(previousSibling);

const parent = firstChild.parentNode;
console.log(parent);

const children = document.getElementById("parent").childNodes;
console.log(children);
