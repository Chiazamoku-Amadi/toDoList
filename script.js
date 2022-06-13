// Initializing global variables
var text = document.getElementById('text');
var btnAdded = document.getElementById('btnAdded');
var btnUpdate = document.getElementById('btnUpdate');
var btnRemove = document.getElementById('btnRemove');
var list = document.getElementById('toDoList');
const collection = document.getElementsByTagName("li");
var currentValue = '';
let item = document.querySelectorAll('.item');
// let deleteItem = document.querySelector('.fa-solid fa-trash-can');



// Listening to input event
text.addEventListener('input', function(event) {
    // Accessing input current value as it changes
    currentValue = event.target.value;
})

// Listening to enter key 'keyup' event
text.addEventListener('keyup', function(enter) {
    // Storing enter key keycode in variable 'keyCode'
    var keyCode = enter.keyCode;
    if (keyCode === 13) {
        addListItem();
    }
})

// Listening to add item onclick event 
btnAdded.addEventListener('click', addListItem);

// Listening to update first item onclick event
btnUpdate.addEventListener('click', function() {
    if (currentValue) {
        var firstItem = list.firstElementChild;
        var newItem = createNewNode();

        list.replaceChild(newItem, firstItem);
        console.log(list.childElementCount);

        // Taking 'current input box value' and 'input value as it changes' to empty        
        text.value = '';
        currentValue = '';
    } else {
        alert('Please enter a valid to do item');
    }
});

// Listening to remove first item onclick event
btnRemove.addEventListener('click', function() {
    var firstItem = list.firstElementChild;
    var newItem = createNewNode();

    list.removeChild(firstItem);

});

// Listening to list onclick event
toDoList.addEventListener('click', function(e) {
    removeItem = e.target.parentElement.remove();
    console.log(removeItem);
})

// Adding a new item to the list
function addListItem() {
    if (currentValue) {
        var newItem = createNewNode();

        list.appendChild(newItem);
        console.log(list.childElementCount);

        text.value = '';
        currentValue = '';
    } else {
        alert('Please enter a valid to do item');
    }
}

// Creating a new node to the tree(ul)
function createNewNode() {
    var newItem = document.createElement('li');
    // let timeAdded = new Date().toLocaleDateString();
    //<span><i id="deleteItem" class="fa-solid fa-trash-can"></i></span>
    var newText = document.createTextNode(currentValue);
    newItem.appendChild(newText);
    newItem.id = "item" + (list.childElementCount + 1);
    newItem.className = "item"; // adds class to each item .... can remove
    // console.log(newItem);
    let span = document.createElement("span");
    span.classList.add("fa-solid", "fa-trash-can");
    newItem.appendChild(span)
    return newItem;
}