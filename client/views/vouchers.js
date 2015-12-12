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
      Session.set("newVoucher",{});
    }
  });
  
  Template.voucher.events({
    "click .voucher-delete": function () {
      Meteor.call("deleteVoucher", this._id);
    },
    "click .voucher-edit": function () {
      Session.set("newVoucher",this);
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
          startDate: dateStart,
          endDate: dateEnd
        });

      Session.set("newVoucher", undefined);

      // Prevent default form submit
      return false;
    }
  });
}