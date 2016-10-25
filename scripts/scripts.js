$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var groceries = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6'];
    var alphaGroceries = groceries.sort();

    alphaGroceries.map(function(alphaGrocery) {
      return alphaGrocery.toUpperCase();
    });


  });
});
