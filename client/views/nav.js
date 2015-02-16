Template.nav.helpers({
  routes: function() {
    return Router.routes.map(function(e){
      return {'path':e.path(), name: e.label};
    });
  },
  asd: function(){
    return ["a","b","c"]
  }
});