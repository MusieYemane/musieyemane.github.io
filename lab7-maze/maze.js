let lost = false;

$(document).ready(function () {

  $("#start").click(function () {
    if (!lost) {
      $("div .boundary").mouseenter(
        function () {
          $("div .boundary").addClass("youlose");
          $("#status").text("You Lose! :(");
          $("#end").unbind("mouseenter");
          lost = true;
        })


      $("#maze").mouseleave(
        function () {
          $("div .boundary").addClass("youlose");
          $("#status").text("You Lose! :(");
          $("#end").unbind("mouseenter");
          lost = true;
        });
    }
    else {
      $("#status").text('Click the "S" to begin');
      $("div .boundary").removeClass("youlose");
      $("#end").mouseenter(function () {
        $("#status").text("You Win! :)");
        $("div .boundary").unbind("mouseenter");
        $("#maze").unbind("mouseleave");
      })
      lost = false;
    }

  })





});