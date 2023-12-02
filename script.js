"use strict";
//1 Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
const itemEl = document.querySelectorAll('.dropdown-item');
itemEl.forEach((el) => 
el.classList.add('super-dropdown'));
console.dir(itemEl);
//2 У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
const buttonEl = document.querySelector('.btn');
buttonEl.classList.toggle('btn-secondary');
console.dir(buttonEl);
//3 Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
const  menuEl = document.querySelector('.menu');
menuEl.classList.remove('dropdown-menu');
console.dir(menuEl);
//4 Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку: `<a href="#">link</a>`
const dropdownEl = document.querySelector('.dropdown');
console.dir(dropdownEl);
dropdownEl.nextElementSibling.insertAdjacentHTML('afterend','<a href="#">link</a>');
//5 У элемента с id "dropdownMenuButton" замените id на "superDropdown".
const superDropdpwn = document.querySelector('#dropdownMenuButton');
superDropdpwn.id = "superDropdown";
console.dir(superDropdpwn);
//6 Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
const ariaLabelledby = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
ariaLabelledby.dataset.dd = 3;
console.dir(ariaLabelledby);
//7 Удалите атрибут type у элемента с классом "dropdown-toggle".
const dropEl = document.querySelector('.dropdown-toggle');
dropEl.attributes.removeNamedItem('type');
console.dir(dropEl);