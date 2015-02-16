if (Meteor.isClient) {
  
  Template.voucherEdit.rendered = function () {
    $('.input-group.date').datepicker({
      autoclose: true
    });
  };
  
  // This code only runs on the client
  Template.vouchers.helpers({
    vouchers: function () {
      return Vouchers.find({});
    },
    newVoucher: function () {
      return Session.get("newVoucher");
    }
  });
  
  Template.vouchers.events({
    "click #vouchers-addnew": function () {
      Session.set("newVoucher",{name:"asd"});
    }
  });
  
  Template.voucher.events({
    "click .voucher-delete": function () {
      Meteor.call("deleteVoucher", this._id);
    }
  });
  
  Template.voucherEdit.events({
    "submit #voucher-edit": function(event,template) {

      var name = template.$('[name=name]').val();
      var dateStart = template.$('[name=datestart]').val();
      var dateEnd = template.$('[name=dateend]').val();
      var description = template.$('[name=description]').val();

      if(this._id)
        Meteor.call("updateVoucher", this._id, this);
      else
        Meteor.call("addVoucher", {
          name: name,
          description: description,
          dates: {
            start: dateStart,
            end: dateEnd
          }
        });

      // Prevent default form submit
      return false;
    }
  });
}