$(document).ready(function(){

// interactivity
$('.rewards__chart__rate__slider__inputs__range input').on('input',function(){
  var dollars = $(this).val();
  $('.rewards__chart__rate__slider__inputs__text output').text('$' + dollars);

  var yld = Math.round((3.5 / (dollars / 100)) * 100) / 100;
  $('.yieldAmount').text(yld);
});


// animations
var tl = gsap.timeline({onUpdate:'', defaults: {duration: 0.5}}),
    startSvg = document.getElementById("yld");

    tl.to(startSvg, {morphSVG:"#eth"}, "+=0.5")
      .to(startSvg, {morphSVG:"#ampl"}, "+=0.5")
      .to(startSvg, {morphSVG:"#dai"}, "+=0.5")
      .to(startSvg, {morphSVG:"#yfi"}, "+=0.5")
      .to(startSvg, {morphSVG:"#ant"}, "+=0.5")
      .to(startSvg, {morphSVG:"#sushi"}, "+=0.5")
      .to(startSvg, {morphSVG:"#link"}, "+=0.5")
      .to(startSvg, {morphSVG:"#usdc"}, "+=0.5")
      .to(startSvg, {morphSVG:"#crv"}, "+=0.5")
      .to(startSvg, {morphSVG:"#wbtc"}, "+=0.5")
      .to(startSvg, {morphSVG:"#usdt"}, "+=0.5")
      .to(startSvg, {morphSVG:"#inch"}, "+=0.5")
      .to(startSvg, {morphSVG:"#bnt"}, "+=0.5")
      .to(startSvg, {morphSVG:"#grt"}, "+=0.5")
      .to(startSvg, {morphSVG:"#kp3r"}, "+=0.5")
      .to(startSvg, {morphSVG:"#uni"}, "+=0.5")
      .to(startSvg, {morphSVG:"#aave"}, "+=0.5")
      .to(startSvg, {morphSVG:"#bal"}, "+=0.5")
      .to(startSvg, {morphSVG:"#band"}, "+=0.5")
      .to(startSvg, {morphSVG:"#bat"}, "+=0.5")
      .to(startSvg, {morphSVG:"#comp"}, "+=0.5")
      .to(startSvg, {morphSVG:"#cream"}, "+=0.5")
      .to(startSvg, {morphSVG:"#cro"}, "+=0.5")
      .to(startSvg, {morphSVG:"#enj"}, "+=0.5")
      .to(startSvg, {morphSVG:"#knc"}, "+=0.5")
      .to(startSvg, {morphSVG:"#lrc"}, "+=0.5")
      .to(startSvg, {morphSVG:"#mana"}, "+=0.5")
      .to(startSvg, {morphSVG:"#mkr"}, "+=0.5")
      .to(startSvg, {morphSVG:"#ren"}, "+=0.5")
      .to(startSvg, {morphSVG:"#snx"}, "+=0.5")
      .to(startSvg, {morphSVG:"#susd"}, "+=0.5")
      .to(startSvg, {morphSVG:"#tusd"}, "+=0.5")
      .to(startSvg, {morphSVG:"#zrx"}, "+=0.5")

      .to(startSvg, {morphSVG:"#yld"}, "+=0.5")
      .repeat(25);

});

const tl = gsap.timeline({repeat:25, repeatDelay:0, yoyo:false});
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"ETH"})
tl.to("#token-text", {duration: 0.25, opacity: 1})
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"SNX"})
tl.to("#token-text", {duration: 0.25, opacity: 1})
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"SUSD"})
tl.to("#token-text", {duration: 0.25, opacity: 1})
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"YFI"})
tl.to("#token-text", {duration: 0.25, opacity: 1})
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"SUSHI"})
tl.to("#token-text", {duration: 0.25, opacity: 1})
tl.to("#token-text", {duration: 0.25, opacity: 0, delay: 2})
tl.to("#token-text", {duration: 0.5, text:"USDT"})
tl.to("#token-text", {duration: 0.25, opacity: 1});

const tlRate = gsap.timeline({repeat:25, repeatDelay:0, yoyo:false});
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"0.5%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1})
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"1.5%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1})
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"2.0%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1})
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"1.0%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1})
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"1.5%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1})
tlRate.to("#others-rate", {duration: 0.25, opacity: 0, delay: 2})
tlRate.to("#others-rate", {duration: 0.5, text:"2.5%"})
tlRate.to("#others-rate", {duration: 0.25, opacity: 1});

var tlCompare = gsap.timeline({onUpdate:'', defaults: {duration: 0.5}}),
    startSvgCompare = document.getElementById("usdt-compare");

    tlCompare.to(startSvgCompare, {morphSVG:"#eth-compare"}, "+=2.5")
      .to(startSvgCompare, {morphSVG:"#snx-compare"}, "+=2.5")
      .to(startSvgCompare, {morphSVG:"#susd-compare"}, "+=2.5")
      .to(startSvgCompare, {morphSVG:"#yfi-compare"}, "+=2.5")
      .to(startSvgCompare, {morphSVG:"#sushi-compare"}, "+=2.5")

      .to(startSvgCompare, {morphSVG:"#usdt-compare"}, "+=2.5")
      .repeat(25);

// function isInViewport(node) {
//   var rect = node.getBoundingClientRect();
//   return (
//     (rect.height > 0 || rect.width > 0) &&
//     rect.bottom >= 0 &&
//     rect.right >= 0 &&
//     rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.left <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }
//
// $(window).scroll(function() {
//   var scrolled = $(window).scrollTop();
//   $('.parallax').each(function(index, element) {
//     var initY = $(this).offset().top;
//     var height = $(this).height();
//     var endY  = initY + $(this).height();
//
//     // Check if the element is in the viewport.
//     var visible = isInViewport(this);
//     if(visible) {
//       var diff = scrolled - initY
//       var ratio = Math.round((diff / height) * 100);
//       $(this).css('transform','translate(-50%, -' + parseInt(-(ratio * 1)) + '%)');
//       console.log('working');
//     }
//   });
// });
