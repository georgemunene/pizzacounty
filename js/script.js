
function getFlavour() {
 
  var flavour = $("#pizzaflavour :selected").val();
  return parseInt(flavour);
}

function getSize() {
  var size = $("#pizzasize :selected").val();
  return parseInt(size);
}

function getCrust() {
 
  var crust = $("#pizzacrust :selected").val();
  return parseInt(crust);
}


function getTopping() {
  
  var topping = $("#pizzatopping :selected").val();
  return parseInt(topping);
}

function getNumber() {
 
  var number = $("#number").val();
  return parseInt(number);
}


function getAmount(flavour, size, crust, topping, number) {
  var results =
    (parseInt(flavour.val()) +
      parseInt(size.val()) +
      parseInt(crust.val()) +
      parseInt(topping.val())) *
    parseInt(number.val());
  alert(
    "You have ordered " +
      number.val() +
      " "  +
      "pizza's" +
      " "  +
      flavour.html() +
      " "  +
      size.html() +
      " "  +
      crust.html() +
      " "  +
      topping.html() +
      " "  +
      " The total amount is Ksh.  "  +
      results +
      " Thank you for choosing us!"
  );
 
  var loc = prompt("Enter your location");
  alert("Thank you for requesting delivery.Your order will cost Ksh 400 and will be delivered at " + loc);
}
function getPick(flavour, size, crust, topping, number) {
  var results =
  (parseInt(flavour.val()) +
  parseInt(size.val()) +
  parseInt(crust.val()) +
  parseInt(topping.val())) *
  parseInt(number.val());
  alert(
    "You have ordered "  +
    number.val() +
    " "  +
    " pizza's, "  +
    flavour.html() +
    " "   +
    size.html() +
    " "  +
    crust.html() +
    "  "  +
    topping.html() +
    "  "  +
    ".The total amount will be Ksh. " +
      results  +
      "  Thank you for choosing us  "
  );
}
$(document).ready(function() {
  $("#make-delivery").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getAmount(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
$(document).ready(function() {
  $("#pick-up").click(function(event) {
    var flavour = $("#pizzaflavour :selected");
    var size = $("#pizzasize :selected");
    var crust = $("#pizzacrust :selected");
    var topping = $("#pizzatopping :selected");
    var number = $("#number");

    getPick(flavour, size, crust, topping, number);
    event.preventDefault();
  });
});
