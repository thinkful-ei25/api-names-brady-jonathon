/* global Item */
'use strict';
// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
  };

  const findAndUpdate = function(id, newData){
    let oldData = this.findById(id);
    Object.assign(oldData, newData);
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(item => item.id !== id);
  };

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setItemIsEditing = function(id, isEditing) {
    const item = this.findById(id);
    item.isEditing = isEditing;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  function toggleCheckForListItem(id){
    const items = store.items.find(item => item.id === id);
    items.checked = !items.checked;
  }

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',
    toggleCheckForListItem,
    addItem,
    findById,
    findAndUpdate,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    setItemIsEditing,
  };
  
}());
