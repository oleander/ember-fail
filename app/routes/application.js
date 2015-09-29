export default Ember.Route.extend({
  afterModel: function() {
    var self = this;
    var ids = [];
    for (var i = 40; i > 0; i--) { ids.push(i); }

    // Run 2 times
    for (var n = 2; n > 0; n--) {
      ids.forEach(function(id) {
        self.store.findRecord("user", id).then(function(user) {
          console.info("User already exists with id ", user.get("id"));
        }).catch(function() {
          var user = self.store.createRecord("user", {
            name: "Joe",
            id: id
          });

          console.info("User was created with id", user.id);
        })
      });
    }
  }
});