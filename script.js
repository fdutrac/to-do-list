const listContainer = document.getElementById('toDoContainer');
const input = document.getElementById('input');
const button = document.getElementById('add')

button.addEventListener('click', (e) => {
    e.preventDefault();
    addItem();
})

let list = [];

function addItem() {
    if (!input.value) return
    else {
        list.push(input.value);
        render(input.value);
    }
}
function render(text) {
    const item = document.createElement('li')
    item.innerText = text;
    listContainer.appendChild(item)
}