Meteor.startup(function () {
    if (!Products.findOne()) {
        Products.insert({title: "To Kill a Mockingbird", author: "Harper Lee"});
        Products.insert({title: "1984", author: "George Orwell"});
        Products.insert({title: "The Lord of the Rings", author: "J. R. R. Tolkien"});
        Products.insert({title: "The Catcher in the Rye", author: "J. D. Salinger"});
        Products.insert({title: "The Great Gatsby", author: "F. Scott Fitzgerald"});
    }
});