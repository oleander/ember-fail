export default Ember.Route.extend({
  afterModel: function() {
    // Clears db to ensure a clean canvas
    localStorage.clear();

    var id1 = 1;
    var id2 = 2;
    // Populate 

    var self = this;

    // Run 2 times
    self.store.find("user", id1).then(function(user) {
      console.info("User already exists with id ", user.get("id"));
    }, function() {
      var user = self.store.createRecord("user", {
        name: "Joe",
        id: id1
      });
      user.save();
      console.info("User was created with id", user.id);
    })

    self.store.findRecord("user", id2).then(function(user) {
      console.info("User already exists with id ", user.get("id"));
    }, function() {
      var user = self.store.createRecord("user", {
        name: "Joe",
        id: id2
      });
      user.save();
      console.info("User was created with id", user.id);
    })
  }
});