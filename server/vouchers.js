Meteor.publish('vouchers', function() {
  return Vouchers.find();
});

Meteor.methods({
  addVoucher: function (voucher) {
    // Make sure the user is logged in before inserting a task
    if (! Meteor.userId()) {
      throw new Meteor.Error("not-authorized");
    }

    voucher.createdAt = new Date();
    voucher.owner = Meteor.userId();

    Vouchers.insert(voucher);
  },
  deleteVoucher: function (id) {
    Vouchers.remove(id);
  },
  updateVoucher: function (voucher) {
    Vouchers.update(voucher._id, voucher);
  }
});