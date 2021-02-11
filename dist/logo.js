$(document).ready(function(){

if( $('.inside h1').length ){
  var characters = $('h1').text().split("");

  $this = $('h1');
  $this.empty();
  $.each(characters, function (i, el) {
      $this.append("<span>" + el + "</span");
  });
}

$('p, span').html(function(i, v){
    return v.replace(/(\d)/g, '<span class="number">$1</span>');
});

});
