Template.loginForm.events({

  'submit #login-form' : function(e, t){
    e.preventDefault();
    // retrieve the input field values
    var email = t.$('#login-email').val() || ""
      , password = t.$('#login-password').val() || "";

    Meteor.loginWithPassword(email, password, function(err){
      if (err){
        Accounts._loginButtonsSession.errorMessage(err.reason || "Unknown error");
      }
      else{}
    });
  }
});