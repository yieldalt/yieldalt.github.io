$(document).ready(function(){

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
        .repeat(1);

  //gsap.to("#ampl] {morphSVG:"#algo] duration: 1}).to("#algo", {morphSVG:"#ant", duration: 1});
  // .to("#ant", {duration: 1, morphSVG:"#bal"});

  /* controls */

  // $("#slider").slider({
  //   range: false,
  //   min: 0,
  //   max: 1,
  //   step:.001,
  //   slide: function ( event, ui ) {
  //     tl.progress( ui.value ).pause();
  //   },
  //   stop: function () {
  //     tl.play();
  //   }
  // });
  //
  // function updateSlider() {
  //   $("#slider").slider("value", tl.progress());
  // }

  // the fromTo() method
  //var tween = KUTE.fromTo('#yld', {path: '#yld' }, { path: '#ampl' }).start();
  // OR
  // the to() method will take the path's d attribute value and use it as start value
  //var tween = KUTE.to('#yld', { path: '#ampl' }).start();
  // // OR
  // // simply pass in a valid path string without the need to have two paths in your SVG
  //var tween = KUTE.to('#yld', { path: 'M301.113,12.011l99.25,179.996l201.864,38.778L461.706,380.808l25.508,203.958l-186.101-87.287L115.01,584.766l25.507-203.958L0,230.785l201.86-38.778L301.113,12.011' }).start();

  // var line = d3.line();
  // var data1 = [[0, 0], [200, 100], [400, 50], [500, 80]];
  // var data2 = [[0, 100], [100, 50], [220, 80], [250, 0],
  //   [300, 20], [350, 30], [400, 100], [420, 10], [430, 90],
  //   [500, 40]];
  //
  // var yld = [[0,100] [100,50] [220,80] [250,0] [300,20] [350,30] [400,100] [420,10] [430,90] [500,40]];
  // var eth = [[16,32] [7.2,32,0,24.8,0,16S7.2,0,16,0s16,7.2,16,16S24.8,32,16,32z] [24,16.2] [16.5,4] [9,16.2l7.5,4.4] [24,16.2z] [24,17.6] [16.5,22] [9,17.6] [16.5,28] [24,17.6z]];
  //
  // d3.select('#path1')
  //   .attr('d', line(data1))
  //   .transition()
  //   .attrTween('d', function () {
  //     return d3.interpolatePath(line(data1), line(data2));
  //   });

});
