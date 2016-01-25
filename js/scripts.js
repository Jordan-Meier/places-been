function Place(location, landmark, timeYear, notes) {
  this.location = location;
  this.landmark = landmark;
  this.timeYear = timeYear;
  this.notes = "";
}

$(document).ready(function() {
  $("form#new-place").submit(function(event) {

    var inputLocation = $("input#new-location").val();
    var inputLandmark = $("input#new-landmark").val();
    var inputTimeYear = $("input#new-timeYear").val();
    var inputNotes = $("input#new-notes").val();
    var newPlace = new Place(inputLocation, inputLandmark, inputTimeYear, inputNotes);

    $("ul#places").append("<li><span class='place'>" + newPlace.location + "</span></li>");

    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-timeYear").val("");
    $("input#new-notes").val("");

    $(".place").last().click(function() {
      $("#show-places").show();
      $("#show-places h2").text(newPlace.location);
      $(".location").text(newPlace.location);
      $(".landmark").text(newPlace.landmark);
      $(".timeYear").text(newPlace.timeYear);
      $(".notes").text(newPlace.notes);
    });

    event.preventDefault();
  });


});
