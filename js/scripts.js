$(document).ready(function() {
  $("button#message").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Woof</li>");
  });

  $("button#response").click(function() {
    $("ul#cat").prepend("<li>Meow meow</li>");
    $("ul#dog").prepend("<li>Woof woof</li>");
  });

  $("#cat-pic").click(function() {
    $("#cat-pic").after('<img src="img/cat.jpeg">');
  });

  $("#dog-pic").click(function() {
    $("#dog-pic").after('<img src="img/dog.jpeg">');
  });
});
