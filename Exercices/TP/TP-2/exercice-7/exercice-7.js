const fpara = document.getElementById('first');
const spara = document.getElementById('second');
const parent = document.getElementById('parent');

console.log(fpara.parentNode)

console.log(fpara.nextElementSibling)

console.log(fpara.nextSibling)

console.log(spara.previousElementSibling)

console.log(spara.previousElementSibling.textContent)

console.log(parent.lastElementChild)

console.log(parent.firstElementChild)

console.log(parent.children)

for (let child of parent.children){
    console.log(child)
}