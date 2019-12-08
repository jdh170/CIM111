var bioClicked = 0;

$(document).ready(function() {
$("#bio").mouseover(function() {
console.log(bioClicked)
if (bioClicked === 0) {
$("#bio").css("font-size", "250px");
bioClicked = 1;
} else {
$("#bio").css("font-size", "200px");
bioClicked = 0;
}
});
});
