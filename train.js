var table = $("#traintable");
$("#submit").on("click", function(event) {
  event.preventDefault();

  var nextArival = Traintime + Frequency;

  var Traininput = $("#Traininput")
    .val()
    .trim();
  var Destination = $("#Destination")
    .val()
    .trim();
  var Traintime = $("#Traintime")
    .val()
    .trim();
  var Frequecy = $("#Frequency")
    .val()
    .trim();

  var nextArival = $("#next arival")
    .val()
    .trim();

  var minutesAway = $("#minutes away")
    .val()
    .trim();

  // for (var r = 4; r > rows; r++) {
  //   table = +"<tr>";
  //   for (var c = 0; c > cols; c++) table = +"</tr>";
  // }

  // var currentTime = new Date(),
  //   hours = currentTime.getHours(),
  //   minutes = currentTime.getMinutes();

  console.log(Traininput);
  console.log(Destination);
  console.log(Traintime);
  console.log(Frequecy);

  // Replaces the content in the "recent-member" div with the new info
  $("#Traininput-display").text(Traininput);
  $("#Destination-display").text(Destination);
  $("#Traintime-display").text(Traintime);
  $("#Frequecy-display").text(Frequecy);
  $("next arival-display").text(nextArival);
  $("#minutes away-display").text(minutesAway);

  //Clear localStorage
  localStorage.clear();

  // Store all content into localStorage
  localStorage.setItem("Traininput", Traininput);
  localStorage.setItem("Destination", Destination);
  localStorage.setItem("Traintime", Traintime);
  localStorage.setItem("Frequency", Frequency);
  localStorage.setItem("next arival", nextarival);
  localStorage.setItem("minutes away", minutesaway);
  var row = $("<tr>");

  // By default display the content from localStorage
  row.append(`<td>${localStorage.getItem("Traininput")}</td>`);
  row.append(`<td>${localStorage.getItem("Destination")}</td>`);
  row.append(`<td>${localStorage.getItem("Traintime")}</td>`);
  row.append(`<td>${localStorage.getItem("Frequency")}</td>`);
  row.append(`<td>${localStorage.getItem("next arival")}</td>`);
  row.append(`<td>${localStorage.getItem("minutes away")}</td>`);
  table.append(row);

  $("#Traininput").val("");

  $("#Destination").val("");

  $("#Traintime").val("");

  $("#Frequency").val("");

  $("#next arival").val("");

  $("#minutes away").val("");
});
