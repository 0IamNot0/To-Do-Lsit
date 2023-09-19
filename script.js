let list = document.getElementById('list');
let input = document.getElementById('input');
let addtoListBtn = document.getElementById('add-to-List');

function loadListFromStorage() {
    const savedList = localStorage.getItem('todoList');
    if (savedList) {
        list.innerHTML = savedList;
    }
}

function saveListToStorage() {
    localStorage.setItem('todoList', list.innerHTML);
}

let clearListBtn = document.getElementById('clear-list');
clearListBtn.addEventListener('click', function () {
    localStorage.removeItem('todoList');
    list.innerHTML = '';
});

document.addEventListener('DOMContentLoaded', function () {
    loadListFromStorage();
});

addtoListBtn.addEventListener('click', function () {
    if (input.value === '') {
        alert('Please Enetr Text');
    }
    else{
    let listItem = document.createElement('li');
    listItem.textContent = input.value;

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'X';
    removeBtn.classList.add('remove');

    removeBtn.addEventListener('click', function () {
        list.removeChild(listItem);
        saveListToStorage();
    });

    listItem.appendChild(removeBtn);
    list.appendChild(listItem);
    input.value = '';

    saveListToStorage();
}
});
