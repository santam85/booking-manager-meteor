Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('vouchers', {
    name: 'Vouchers',
    path: '/vouchers',
    template: 'vouchers',
    onBeforeAction: function () {
      if (!Meteor.userId()) {
        this.render('login');
      } else {
        this.next();
      }
    }
  });
  
});

