var jillianClicked = 0;

$(document).ready(function() {
$("#jillian").mouseover(function() {
console.log(jillianClicked)
if (jillianClicked === 0) {
$("#jillian").css("font-size", "150px");
jillianClicked = 1;
} else {
$("#jillian").css("font-size", "200px");
jillianClicked = 0;
}
});
});
function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}
window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'UA-152986285-1');
