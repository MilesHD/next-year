// Collection to hold our tasks
Goals = new Mongo.Collection("goals");

if (Meteor.isClient) {

    Meteor.startup(function() {
        React.render(<App />, document.getElementById("render-target"));
    });

}
