$(document).ready(function() {
  $("button#message").click(function() {
    $("ul#cat").prepend("<li>Meow</li>");
    $("ul#dog").prepend("<li>Woof</li>");
  });

  $("button#response").click(function() {
    $("ul#cat").prepend("<li>Meow meow</li>");
    $("ul#dog").prepend("<li>Woof woof</li>");
  });
});
