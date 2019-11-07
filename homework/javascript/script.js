var londonClicked = 0;

$(document).ready(function() {
$("#london").mouseover(function() {
console.log(londonClicked)
if (londonClicked === 0) {
$("#london").css("font-size", "250px");
londonClicked = 1;
} else {
$("#london").css("font-size", "200px");
londonClicked = 0;
}
});
});
$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});
var questionsClicked = 0;

$(document).ready(function() {
$("#questions").click(function() {
console.log(questionsClicked)
if (questionsClicked === 0) {
$("#questions").css("font-size", "50px");
questionsClicked = 1;
} else {
$("#questions").css("font-size", "100px");
questionsClicked = 0;
}
});
});
