




// --------------------------------------------------------------------ADD ITEM-------------------------------------
//NOTE: The code to add an item is overly complicated, it could have been as simple as the delete and check functions. I was experimenting with the "single function" principal of modularity.
//However, I do like how all functions are being called from one place at the bottom called handleShoppingList().

function generateItemHTML(item){
    return `<li>
    <span class="shopping-item">${item}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`
}

function grabInput(event){
    return $(event.target).find('input').val();
}

function handleAddItem(){
    $('#js-shopping-list-form').on('submit', e=> {                  //event listener form entering new item
        e.preventDefault();                                         //prevent form submission to non-existent server
        let userInput = grabInput(e);                               //grab and assign user's input to variable
        $('.shopping-list').append(generateItemHTML(userInput));    //generate <li> item and append to list
        $(e.target).find('input').val("");                          //reset input value
    })
}
// --------------------------------------------------------------------ADD ITEM-------------------------------------

function handleDelete(){
    $('.shopping-list').on('click', '.shopping-item-delete', e => {
        console.log($(e.target).closest('li').find('.shopping-item').text())
        deleteItem = $(e.target).closest('li');
        deleteItem.remove();
    })
}

function handleItemCheck(){
    $('.shopping-list').on('click', '.shopping-item-toggle', e=> {
        console.log($(e.target).closest('li').find('.shopping-item').text())
        $(e.target).closest('li').find('.shopping-item').toggleClass('shopping-item__checked')
    })
}

function handleShoppingList(){
    console.log('DOM loaded and ready...');

    handleAddItem();
    handleDelete();
    handleItemCheck();

}






$(handleShoppingList);