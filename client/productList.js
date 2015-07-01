Template.productList.helpers({
  products: function () {
    return Products.find();
  }
});
Template.productList.events({
  "submit .add-product": function(event) {
    event.preventDefault();
    Meteor.call('addProduct',{title: event.target.title.value, author: event.target.author.value});
  }
});