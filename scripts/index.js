/* global shoppingList, store */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


api.createItem('pears', (newItem) => {
  api.getItems((items) => {
    console.log(items);
  });
});

store.items.push(Item.create('apples'));

