'use strict';
const api = (function(){
  let i = 0;
  let BASE_URL;
  i === 0 ? BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jonathon' : BASE_URL = 'https://thinkful-list-api.herokuapp.com/Brady';


  
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  const createItem = function(name, callback){
    let newItem = JSON.stringify({
      name : name,
    });
    $.ajax({
      url : `${BASE_URL}/items`,
      method : 'POST',
      contentType :'application/json',
      data : newItem,
      success : callback,
    });
  };

  const updateItem = function(itemId, updateData, callback) {
    $.ajax({
      url: `${BASE_URL}/items/${itemId}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    })
  };

  return {
    getItems,
    createItem,
    updateItem
  };
}());