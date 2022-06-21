// ------------------------------------------------------------------ JavaScript --------------------------------------------------------------------

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

// // Listening to enter key 'keyup' event
text.addEventListener('keyup', function(enter) {
    // Storing enter key keycode in variable 'keyCode'
    var keyCode = enter.keyCode;
    if (keyCode === 13) {
        addListItem();
    }
})

// Listening to add item onclick event 
btnAdded.addEventListener('click', addListItem);
// btnAdded.addEventListener('click', addListItem); // For getTODOListFromBackend function
// btnAdded.addEventListener('click', createTODOItemAtBackend); // For createTODOItemAtBackend function

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
    newItem.appendChild(span);

    return newItem;
}


// --------------------------------------------------------------------- JSON with AJAX ---------------------------------------------------------------------

// Creating new todo list items dynamically using data(id and title) from the backend.

// function createTODODynamically(id, title) {
//     var newItem = document.createElement('li');
//     var newText = document.createTextNode(title);
//     newItem.appendChild(newText);
//     newItem.id = id;
//     newItem.className = "item"; // adds class to each item .... can remove

//     let span = document.createElement("span");
//     span.classList.add("fa-solid", "fa-trash-can");
//     newItem.appendChild(span);

//     return newItem;
// }

// Getting new todo list items from the backend and appending each item to the list.
// Comment this and related lines of code out for createTODOItemAtBackend function to work properly.

// function getTODOListFromBackend() {
//     var http = new XMLHttpRequest();
//     http.onreadystatechange = function() {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 var response = JSON.parse(this.responseText); // String to object
//                 for (i = 0; i < response.length; i++) {
//                     list.appendChild(createTODODynamically(response[i].id, response[i].title));
//                 }
//             } else {
//                 console.log('Call Failed');
//             }
//         }
//     }
//     http.open('GET', 'http://jsonplaceholder.typicode.com/todos', true);
//     http.send();
// }
// getTODOListFromBackend();

// Sending a POST call to the backend to create new todo list items.
// Comment this and related lines of code out for getTODOListFromBackend function to work properly.

// function createTODOItemAtBackend() {
//     var http = new XMLHttpRequest();
//     http.open('POST', 'http://jsonplaceholder.typicode.com/todos', true);
//     http.onreadystatechange = function() {
//         if (this.readyState === 4) {
//             if (this.status === 201) {
//                 var response = JSON.parse(this.responseText); // String to object
//                 list.appendChild(createTODODynamically(response.id, currentValue));
//                 console.log(list.childElementCount);
//                 text.value = '';
//                 currentValue = '';
//             } else {
//                 console.log('Call Failed');
//             }
//         }
//     }
//     var obj = JSON.stringify({ // Object to string
//         "userId": 1,
//         "title": currentValue,
//         "completed": false
//     });
//     http.send(obj);
// }




// ------------------------------------------------------------------- jQuery ----------------------------------------------------------------------
// $(document).ready(function() { // Putting everything inside the 'ready' method, which checks if the DOM tree is generated or not.
//     // Once the HTML elements are mounted on the DOM tree, all operations can be performed on them.


//     // Initializing global variables
//     var text = $('#text');
//     var btnAdded = $('#btnAdded');
//     var btnUpdate = document.getElementById('btnUpdate');
//     var btnRemove = document.getElementById('btnRemove');
//     var list = $('#toDoList');
//     const collection = document.getElementsByTagName("li");
//     var currentValue = '';
//     let item = document.querySelectorAll('.item');
//     // let deleteItem = document.querySelector('.fa-solid fa-trash-can');


//     text.on({
//         // Listening to input event
//         'input': function(event) {
//             // Accessing input current value as it changes
//             currentValue = event.target.value;
//         },
//         // Listening to enter key 'keyup' event
//         'keyup': function(enter) {
//             // Storing enter key keycode in variable 'keyCode'
//             var keyCode = enter.keyCode;
//             if (keyCode === 13) {
//                 addListItem(); // For GET call
//                 // createTODOItemAtBackend(); // For POST call
//             }
//         }
//     })

//     // Listening to add item onclick event 
//     $('#btnAdded').click(addListItem); // For GET call
//     // $('#btnAdded').click(createTODOItemAtBackend); // For POST call

//     // Listening to update first item onclick event
//     btnUpdate.addEventListener('click', function() {
//         if (currentValue) {
//             var firstItem = list.firstElementChild;
//             var newItem = createNewNode();
//             var count = $("#toDoList .item").length;

//             $("li:first").replaceWith(newItem);
//             console.log(count);

//             // Taking 'current input box value' and 'input value as it changes' to empty        
//             text.val('');
//             currentValue = '';
//         } else {
//             alert('Please enter a valid to do item');
//         }
//     });

//     // Listening to remove first item onclick event
//     btnRemove.addEventListener('click', function() {
//         var firstItem = list.firstElementChild;
//         var newItem = createNewNode();

//         $("li:first").remove();

//     });

//     // Listening to list onclick event
//     toDoList.addEventListener('click', function(e) {
//         removeItem = e.target.parentElement.remove();
//         console.log(removeItem);
//     })

//     // Adding a new item to the list
//     function addListItem() {
//         if (currentValue) {
//             var newItem = createNewNode();
//             var count = $("#toDoList .item").length;

//             list.append(newItem);
//             console.log(count);


//             text.val('');
//             currentValue = '';
//         } else {
//             alert('Please enter a valid to do item');
//         }
//     }

//     // Creating a new node to the tree(ul)
//     function createNewNode() {
//         var newItem = document.createElement('li');
//         // let timeAdded = new Date().toLocaleDateString();
//         //<span><i id="deleteItem" class="fa-solid fa-trash-can"></i></span>
//         var newText = document.createTextNode(currentValue);
//         newItem.append(newText);
//         newItem.id = "item" + (list.childElementCount + 1);
//         newItem.className = "item"; // adds class to each item .... can remove
//         // console.log(newItem);
//         let span = document.createElement("span");
//         span.classList.add("fa-solid", "fa-trash-can");
//         newItem.append(span);

//         return newItem;
//     }


//     // Creating new todo list items dynamically using data(id and title) from the backend. 
//     function createTODODynamically(id, title) {
//         var newItem = document.createElement('li');
//         var newText = document.createTextNode(title);
//         newItem.append(newText);
//         newItem.id = id;
//         newItem.className = "item"; // adds class to each item .... can remove

//         let span = document.createElement("span");
//         span.classList.add("fa-solid", "fa-trash-can");
//         newItem.append(span);

//         return newItem;
//     }


//     // Getting new todo list items from the backend and appending each item to the list.
//     // AJAX with jQuery
//     function getTODOListFromBackend() {
//         $.get('http://jsonplaceholder.typicode.com/todos', function(data, status) {
//             var response = data; // String to object conversion - jQuery does conversion automatically
//             for (i = 0; i < response.length; i++) {
//                 list.append(createTODODynamically(response[i].id, response[i].title));
//             }
//         })
//     }

//     getTODOListFromBackend();


//     // Sending a POST call to the backend to create new todo list items.
//     // AJAX with jQuery
//     // function createTODOItemAtBackend() {
//     //     $.post('http://jsonplaceholder.typicode.com/todos', obj, function(data, status) {
//     //         var response = data; // String to object
//     //         var count = $("#toDoList .item").length;
//     //         list.append(createTODODynamically(response.id, currentValue));
//     //         console.log(count);
//     //         text.val('');
//     //         currentValue = '';
//     //     })
//     //     var obj = JSON.stringify({ // Object to string
//     //         "userId": 1,
//     //         "title": currentValue,
//     //         "completed": false
//     //     })
//     // }
// })