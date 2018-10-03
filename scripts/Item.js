/* global cuid */
'use strict';
// eslint-disable-next-line no-unused-vars
const Item = (function(){

  const validateName = function(name) {
    if (!name) throw new TypeError('Name must not be blank');
  };

  const create = function(name) {
    return {
      id: cuid(),
      name,
      checked: false
    };
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
  return {
    validateName,
    create,
    createItem,
  };
  
}());
