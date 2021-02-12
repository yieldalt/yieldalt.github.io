$(document).ready(function(){

if( $('.inside h1').length ){
  var characters = $('h1').text().split("");

  $this = $('h1');
  $this.empty();
  $.each(characters, function (i, el) {
      $this.append("<span>" + el + "</span");
  });
}

$('p, span, .values a').html(function(i, v){
    return v.replace(/(\d)/g, '<span class="number">$1</span>');
});



$('.assets ul a').click(function(e){
  e.preventDefault();
  var $this = $(this);
  $this.toggleClass('active');
  //$this.parents('ul').prepend($this.parent());
});

// var assets = [];
// $('.assets ul li').each(function(){
//   assets.push($(this));
// });
//
// $('.assets a.reset').click(function(e){
//   e.preventDefault();
//   $('.assets ul').innerHTML = assets.join(" ");
// });

});
