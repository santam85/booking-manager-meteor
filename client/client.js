Accounts.ui.config({
  passwordSignupFields: "EMAIL_ONLY"
});

// At the top of our client code
Meteor.subscribe("vouchers");