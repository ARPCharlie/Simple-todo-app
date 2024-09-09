const items = document.getElementById('items');
const input = document.getElementById('input');
const button = document.getElementById('button');

function addItem() {
    const newItem = document.createElement("li");
    newItem.innerHTML = input.value;
    newItem.className = "item";
    newItem.onclick = function() {
        elemnt = this;
        elemnt.remove();
    };
    items.appendChild(newItem);
    input.value = "";
};