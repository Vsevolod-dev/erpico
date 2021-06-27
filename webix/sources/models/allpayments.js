const channels = { 0: 'Телефон', 1: 'СМС' };
export const allpayments = new webix.DataCollection({
  url: 'http://localhost:80/api/requests',

  scheme: {
    $init: function (obj) {
      obj.channel = channels[obj.channel];
    },
  },
});
