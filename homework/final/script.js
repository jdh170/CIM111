var centeredClicked = 0;

$(document).ready(function() {
$("#centered").mouseover(function() {
console.log(centeredClicked)
if (centeredClicked === 0) {
$("#centered").css("font-size", "150px");
centeredClicked = 1;
} else {
$("#centered").css("font-size", "200px");
centeredClicked = 0;
}
});
});
