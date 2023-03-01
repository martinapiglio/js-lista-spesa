console.log('test');

/*
1 - create variables:
    a - array shopping list;
    b - ul list from HTML;
    c - an index set as 0;
2 - WHILE cycle:
    a - until index remains < shopping list array variable length:
        i - create a new element (new list item);
        ii - append this new element to the shopping list HTML element;
        iii - write the list item value;
        iv - the index must be +1 in order to avoid the infinite cycle;
3 - insert a button in order to add new elements to the list.
*/

//VARIABLES
let shoppingList = ['pane','latte','uova','caffè','pasta','frutta','detersivo'];
let shoppingListEl = document.getElementById("shopping-list");
let i = 0;

        //check
        console.log(shoppingList);
        console.log(shoppingListEl);
        // /check

//WHILE cycle
while (i < shoppingList.length) {

    let shoppingListItem = document.createElement('li');

    shoppingListEl.append(shoppingListItem);

    shoppingListItem.innerText = shoppingList[i];

    i++;
};


//BUTTON: insert new element list
let inputNewItem = document.getElementById('input-new-item');
let addItemButton = document.getElementById('add-item-button');

            //check
            console.log(inputNewItem);
            console.log(addItemButton);
            // /check


addItemButton.addEventListener('click', function () {

    if (inputNewItem.value !='') {
        
        //add new item to shopping list array variable
        shoppingList.push(inputNewItem.value);

        //create a new element (new list item);
        let newListItem = document.createElement('li');

        //append this new element to the shopping list HTML element;
        shoppingListEl.append(newListItem);

        //write the list item value;
        newListItem.innerHTML = inputNewItem.value;

    };

            //check
            console.log(shoppingList);
            // /check

});