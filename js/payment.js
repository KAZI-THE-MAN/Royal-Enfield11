// Simple PayPal Sandbox Payment Integration
// Uses PayPal JS SDK with sandbox client-id (sb)
document.addEventListener("DOMContentLoaded", function () {
  if (typeof paypal === "undefined") return;

  paypal.Buttons({
    createOrder: function (data, actions) {
      return actions.order.create({
        purchase_units: [{
          amount: { value: '199.00' }
        }]
      });
    },
    onApprove: function (data, actions) {
      return actions.order.capture().then(function (details) {
        alert('Payment completed by ' + details.payer.name.given_name);
      });
    }
  }).render('#paypal-button-container');
});