// get prices
var yldPriceLink = "https://api.coingecko.com/api/v3/simple/price?ids=yield&vs_currencies=usd";
var loanFeed = "https://yieldgang.io/api/v1/loans";
var messariFeed = "https://data.messari.io/api/v2/assets?limit=500&fields=id,slug,symbol,metrics/market_data/price_usd";

// Messari feed prices
var yldPrice = 0;
var amplPrice = 0;
var daiPrice = 0;
var ethPrice = 0;
var yfiPrice = 0;
var antPrice = 0;
var sushiPrice = 0;
var linkPrice = 0;
var usdcPrice = 0;
var crvPrice = 0;
var btcPrice = 0;
var usdtPrice = 0;
var inchPrice = 0;
var bntPrice = 0;
var kp3rPrice = 0;
var uniPrice = 0;
var aavePrice = 0;
var balPrice = 0;
var bandPrice = 0;
var batPrice = 0;
var compPrice = 0;
var creamPrice = 0;
var croPrice = 0;
var enjPrice = 0;
var kncPrice = 0;
var lrcPrice = 0;
var manaPrice = 0;
var mkrPrice = 0;
var renPrice = 0;
var snxPrice = 0;
var susdPrice = 0;
var tusdPrice = 0;
var zrxPrice = 0;

// Total Value loaned
var tvl = 0;
var totalInterestVal = 0;
var totalRewardVal = 0;
var loanCount = 0;

(async () => {

  await $.getJSON(yldPriceLink, function(data){
    yldPrice = data.yield.usd;
  });

  await $.getJSON(messariFeed, function(data){
    var obj = data.data;
    var btc = "btc";
    for (var i = 0; i < obj.length; i++){
      // look for the entry with a matching `code` value

      if (obj[i].symbol == "AMPL"){
        amplPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "DAI"){
        daiPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "ETH"){
        ethPrice = new Decimal(obj[i].metrics.market_data.price_usd);
        console.log("Eth Price: " + ethPrice);
      }
      if (obj[i].symbol == "YFI"){
        yfiPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "ANT"){
        antPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "SUSHI"){
        sushiPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "LINK"){
        linkPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "USDC"){
        usdcPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "CRV"){
        crvPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "BTC"){
        btcPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "USDT"){
        usdtPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "1INCH"){
        inchPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "BNT"){
        bntPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "GRT"){
        kp3rPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "UNI"){
        uniPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "AAVE"){
        aavePrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "BAL"){
        balPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "BAND"){
        bandPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "COMP"){
        compPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "CREAM"){
        creamPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "CRO"){
        croPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "ENJ"){
        enjPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "KNC"){
        kncPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "LRC"){
        lrcPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "MANA"){
        manaPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "MKR"){
        mkrPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "REN"){
        renPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "SNX"){
        snxPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "SUSD"){
        susdPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "TUSD"){
        tusdPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
      if (obj[i].symbol == "ZRX"){
        zrxPrice = new Decimal(obj[i].metrics.market_data.price_usd);
      }
    }
  });

  // Loan Count
  await $.getJSON(messariFeed, function(data){
    var loanCount = data.data.length;
    console.log("Asset Count: " + loanCount);
  });
  // Loan Count
  await $.getJSON(loanFeed, function(data){
    loanCount = data.length;
    console.log("Loan count: " + loanCount);

    for(var i = 0; i < data.length; i++) {
      var obj = data[i];
      var thisVal = 0;
      var thisInterestVal = 0;
      var thisRewardVal = 0;
      var principal = new Decimal(obj.loan_details.principal);
      var interest = new Decimal(obj.loan_details.interest).dividedBy(100);
      if( obj.reward !== null ){
        var rewardInit = Math.round((obj.reward) * 10000000) / 10000000;
        var reward = new Decimal(rewardInit);
        console.log(rewardInit);
        console.log("YLD Price: " + yldPrice * 0.0006912);
      }
      var tokenId = obj.loan_details.lending_token_details.id;

      if( tokenId == "tether" ){
        thisVal = principal * usdtPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "ampleforth" ){
        thisVal = principal * amplPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "balancer" ){
        thisVal = principal * balPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "weth" ){
        thisVal = principal * ethPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "uniswap" ){
        thisVal = principal * uniPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "dai" ){
        thisVal = principal * daiPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "usd-coin" ){
        thisVal = principal * usdcPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "sushi" ){
        thisVal = principal * sushiPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "1inch" ){
        thisVal = principal * inchPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "wrapped-bitcoin" ){
        thisVal = principal * btcPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "chainlink" ){
        thisVal = principal * linkPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "bancor" ){
        thisVal = principal * bntPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      } else if( tokenId == "republic-protocol" ){
        thisVal = principal * renPrice;
        thisInterestVal = thisVal * interest;
        if( obj.reward !== null ){
          thisRewardVal = rewardInit * yldPrice;
        }
        console.log( thisRewardVal );
      }

      tvl += thisVal;
      totalInterestVal += thisInterestVal;
      totalRewardVal += thisRewardVal;
    }

  });

  console.log("Total Value Loaned " + tvl)
  $('#totalValue').text("$" + Math.round(tvl));
  $('#totalInterest').text("$" + Math.round(totalInterestVal));
  $('#totalRewards').text("$" + totalRewardVal.toFixed(2));
  $('#avgLoanVal').text("$" + Math.round((tvl / loanCount)));
//  $('p.stat').text("Total Value Loaned: $" + Math.round(tvl) + ", Average Value Per Loan: $" + Math.round((tvl / loanCount)) + ", Total Interest Earned: $" + Math.round(totalInterestVal) + ", Total Rewards Earned: $" + totalRewardVal.toFixed(2));


})();

$(document).ready(function(){

// const pricesWs = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum,tether,ampleforth,dai,yearn')

// scrollTrigger
$('a[href="#roadmap"]').click(function(e){
  e.preventDefault();
  gsap.to(window, {duration: 0.75, scrollTo:"#roadmap"});
});

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
