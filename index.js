

function handleNewItem(){
    $('form').on('submit', e => {
        e.preventDefault();
        let userInput = $('#shopping-list-entry').val();
        console.log(userInput);

        let list = $('.shopping-list');

        list.append(`<li>
        <span class="shopping-item">${userInput}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);

      $('#shopping-list-entry').val(""); //clear input


    })
    
}

function handleItemCheck(){
    $('.shopping-list').on('click', '.shopping-item-toggle', e => {
        console.log($(e.target));
        let toggleButton = $(e.target);
        let toggleItem = toggleButton.closest('li').find('.shopping-item');
        console.log(toggleItem);
        toggleItem.toggleClass('shopping-item__checked');
    })
}

function handleDelete(){
    $('.shopping-list').on('click', '.shopping-item-delete', e => {
        let deleteButton = $(e.target);
        let deleteItem = deleteButton.closest('li');
        console.log(deleteItem);

        deleteItem.remove();
        
    })
}












$(handleNewItem);
$(handleItemCheck);
$(handleDelete);