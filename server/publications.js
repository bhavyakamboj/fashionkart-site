/**
 * Created by bhavya on 1/7/15.
 */
Meteor.publish('products', function() {
    return Products.find({userID: this.userId});
});