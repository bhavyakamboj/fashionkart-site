Products = new Meteor.Collection("products");
Meteor.methods({
    addProduct: function(productData) {
        if(this.userId){
            productData.userID = this.userId;
            var productID = Products.insert(productData);
            return productID;
        }
    }
});
