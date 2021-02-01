$(document).ready(function(){

var characters = $('h1').text().split("");

$this = $('h1');
$this.empty();
$.each(characters, function (i, el) {
    $this.append("<span>" + el + "</span");
});


});
