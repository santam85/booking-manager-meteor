Vouchers = new Meteor.Collection('vouchers');

if(Meteor.isServer){
  Vouchers.allow({
    'insert': function () {
      return true;
    },
    'update': function (userId,doc) {
      return doc.userId == userId;
    }
  });
}

var Schemas = {};

Schemas.Vouchers = new SimpleSchema({
  name: {
    type: String,
    label: "Name",
    max: 200
  },
  description: {
    type: String,
    label: "Description"
  },
  validFrom: {
    type: String,
    label: "Valid from",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker"
    }
  },
  validUntil: {
    type: String,
    label: "Valid until",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker"
    }
  }
});

Vouchers.attachSchema(Schemas.Vouchers);