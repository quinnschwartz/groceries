$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var item1 = $("#item1").val();
    var item2 = $("#item2").val();
    var item3 = $("#item3").val();
    var item4 = $("#item4").val();
    var item5 = $("#item5").val();
    var item6 = $("#item6").val();

    var items = [item1, item2, item3, item4, item5, item6];

    var alphaItems = items.sort();

    var results = alphaItems.map(function(alphaItem) {
      return alphaItem.toUpperCase();
    });
    results.forEach(function(result) {
        $("ul").append("<li>" + result + "</li>");

      // $("li#one").text(result[0]);
      // $("li#two").text(result[1]);
      // $("li#three").text(result[2]);
      // $("li#four").text(result[3]);
      // $("li#five").text(result[4]);
      // $("li#six").text(result[5]);
      // $("#answer").show();
  });
});
});
