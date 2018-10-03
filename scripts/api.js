'use strict';
const api = (function(){
  let i = 1;
  let BASE_URL;
  i === 0 ? BASE_URL = 'https://thinkful-list-api.herokuapp.com/Jonathon' : BASE_URL = 'https://thinkful-list-api.herokuapp.com/Brady';


  
  const getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`, callback);
  };

  return {
    getItems,
  };
}());