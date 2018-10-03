/* global shoppingList, store */
'use strict';

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
});


api.getItems(function(data) {
  console.log(data);
});

console.log(api.BASE_URL);

store.items.push(Item.create('apples'));
