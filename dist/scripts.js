
$(document).ready(function(){

  var weblink = "https://api.coingecko.com/api/v3/simple/price?ids=yield&vs_currencies=usd";

  $.getJSON(weblink, function(data){
    var price = data.yield.usd;

    $('input#avgYldPrice, input#avgYldPrice + input[type="range"]').val(Math.round(price));
  });

});

$(window).on('load',function(){



  // Loan Vars
  var totalLoans = $('input#totalLoans').val();
  var avgLoanSize = $('input#avgLoanSize').val();
  var defaultPct = $('input#defaultPct').val();
  var avgInterest = $('input#avgInterest').val();
  var avgInterestPerc = avgInterest * 0.01;
  var avgYldPrice = $('input#avgYldPrice').val();
  var lenderIntFee = $('input#lenderIntFee').val();
  var maxYldReward = 350;
  var claimedEarlyRwd = $('input#claimedEarlyRwd').val();
  var unclaimedRwd = $('input#unclaimedRwd').val();

  // Outputs
  var $totalGrossVol = $('p#totalGrossVol');
  var $totalGoodVol = $('p#totalGoodVol');
  var $totalDefVol = $('p#totalDefVol');
  var $avgLoanSize = $('p#avgLoanSize');
  var $totalNumGood = $('p#totalNumGood');
  var $totalNumDef = $('p#totalNumDef');

  var totalGrossVolInt = avgLoanSize * totalLoans;
  var totalGoodVolInt = totalGrossVolInt * (1 - (defaultPct * .01));
  var totalDefVolInt = totalGrossVolInt * (defaultPct * .01);
  var avgLoanSizeInt = totalGrossVolInt / totalLoans;
  var totalNumGoodInt = totalLoans * (1 - (defaultPct * .01));
  var totalNumDefInt = totalLoans - totalNumGoodInt;

  var $totalSupplyInc = $('p#totalSupplyInc');
  var $supplyDecLendingAvg = $('p#supplyDecLendingAvg');


  var lendFee = avgLoanSize * avgInterestPerc * (lenderIntFee / 100);
  var borrowFee = avgLoanSize * 0.01;
  var liquidationFee = 0.07 * (avgLoanSize * 1.25);

  var goodFees = (lendFee + borrowFee) * totalNumGoodInt;
  var defaultFees = liquidationFee * totalNumDefInt;

  var totalFees = goodFees + defaultFees;
  var totalBurn = totalFees / avgYldPrice;
  //var perLoanSupplyIncInt = (avgInterest - 1) * 0.01 * avgLoanSize / avgYldPrice;
  //var perLoanSupplyIncInt = Math.min((avgInterestPerc - 0.01) * avgLoanSize, (maxYldReward / avgYldPrice));
  var perLoanSupplyIncInt = Math.min(((1 / avgYldPrice) * (avgInterestPerc - 0.01)) * avgLoanSize, (maxYldReward / avgYldPrice)) * (1 - (unclaimedRwd / 100));
  var perLoanSupplyIncAfterEarly = perLoanSupplyIncInt - (perLoanSupplyIncInt * (claimedEarlyRwd / 100)) * 0.65;
  var totalMint = perLoanSupplyIncAfterEarly * totalNumGoodInt;

  console.log('Total fees on good loans: $' + totalFees);
  console.log('Total YLD to be burned: ' + totalBurn + ' YLD');
  console.log('Total YLD to be minted (before burn): ' + totalMint + ' YLD');
  console.log('Supply Increase - Supply Decrease: ' + (totalMint - totalBurn) + ' YLD');

  var totalSupplyIncInt = totalNumGoodInt * perLoanSupplyIncAfterEarly;
  var totalSupplyIncYldInt = totalSupplyIncInt * avgYldPrice;
  var totalSupplyIncMinusDec = totalSupplyIncYldInt - ( totalFees / avgYldPrice );
  //console.log('Total supply increase: ' + totalSupplyIncInt + ' YLD ($' + totalSupplyIncYldInt + ')');
  //console.log('Supply Increase - Supply Decrease: ' + totalSupplyIncMinusDec );

  var supplyDecLendingInt = ( avgLoanSize * avgInterestPerc * 0.02 ) / avgYldPrice;

  // Set Total Gross Volume
  $totalGrossVol.text( (avgLoanSize * totalLoans) ).formatNumber();
  // Set Total Good Loans Volume
  $totalGoodVol.text( totalGoodVolInt ).formatNumber();
  // Set Total Default Volume
  $totalDefVol.text( totalDefVolInt ).formatNumber();
  // Set Average Loan size
  $avgLoanSize.text( avgLoanSizeInt ).formatNumber();
  // Set Total Number of Good Loans
  $totalNumGood.text( totalNumGoodInt );
  // Set Total Number of Defaulted Loans
  $totalNumDef.text( totalNumDefInt );
  // Set Supply Increase Total
  $totalSupplyInc.text( totalSupplyIncInt );
  // Set Supply Decrease from Lending Fee
  $supplyDecLendingAvg.text( supplyDecLendingInt );
  // Set Total Minted
  $('#totalToMint').text( Math.round(totalMint) + " YLD" ).formatNumber();
  // Set Total Burned
  $('#totalToBurn').text( Math.round(totalBurn) + " YLD" ).formatNumber();
  // Set Net Minted
  $('#netMint').text( Math.round(totalMint - totalBurn) + " YLD" ).formatNumber();

  function runNumbers(){
    // Loan Vars
    totalLoans = $('input#totalLoans').val();
    avgLoanSize = $('input#avgLoanSize').val();
    defaultPct = $('input#defaultPct').val();
    avgInterest = $('input#avgInterest').val();
    avgInterestPerc = avgInterest * 0.01;
    avgYldPrice = $('input#avgYldPrice').val();
    lenderIntFee = $('input#lenderIntFee').val();
    maxYldReward = 350;
    claimedEarlyRwd = $('input#claimedEarlyRwd').val();
    unclaimedRwd = $('input#unclaimedRwd').val();

    // Outputs
    $totalGrossVol = $('p#totalGrossVol');
    $totalGoodVol = $('p#totalGoodVol');
    $totalDefVol = $('p#totalDefVol');
    $avgLoanSize = $('p#avgLoanSize');
    $totalNumGood = $('p#totalNumGood');
    $totalNumDef = $('p#totalNumDef');

    totalGrossVolInt = avgLoanSize * totalLoans;
    totalGoodVolInt = totalGrossVolInt * (1 - (defaultPct * .01));
    totalDefVolInt = totalGrossVolInt * (defaultPct * .01);
    avgLoanSizeInt = totalGrossVolInt / totalLoans;
    totalNumGoodInt = totalLoans * (1 - (defaultPct * .01));
    totalNumDefInt = totalLoans - totalNumGoodInt;

    $totalSupplyInc = $('p#totalSupplyInc');
    $supplyDecLendingAvg = $('p#supplyDecLendingAvg');


    lendFee = avgLoanSize * avgInterestPerc * (lenderIntFee / 100);
    borrowFee = avgLoanSize * 0.01;
    liquidationFee = 0.07 * (avgLoanSize * 1.25);

    goodFees = (lendFee + borrowFee) * totalNumGoodInt;
    defaultFees = liquidationFee * totalNumDefInt;

    totalFees = goodFees + defaultFees;
    totalBurn = totalFees / avgYldPrice;
    //perLoanSupplyIncInt = (avgInterest - 1) * 0.01 * avgLoanSize / avgYldPrice;
    //perLoanSupplyIncInt = Math.min((avgInterestPerc - 0.01) * avgLoanSize, (maxYldReward / avgYldPrice));
    perLoanSupplyIncInt = Math.min(((1 / avgYldPrice) * (avgInterestPerc - 0.01)) * avgLoanSize, (maxYldReward / avgYldPrice)) * (1 - (unclaimedRwd / 100));
    perLoanSupplyIncAfterEarly = perLoanSupplyIncInt - (perLoanSupplyIncInt * (claimedEarlyRwd / 100)) * 0.65;
    totalMint = perLoanSupplyIncAfterEarly * totalNumGoodInt;

    // console.log('perLoanSupplyIncInt' + perLoanSupplyIncInt);
    // console.log('Total fees on good loans: $' + totalFees);
    // console.log('Total YLD to be burned: ' + totalBurn + ' YLD');
    // console.log('Total YLD to be minted (before burn): ' + totalMint + ' YLD');
    // console.log('Supply Increase - Supply Decrease: ' + (totalMint - totalBurn) + ' YLD');

    // Set Total Gross Volume
    $totalGrossVol.text( Math.round(avgLoanSize * totalLoans) ).formatNumber();
    // Set Total Good Loans Volume
    $totalGoodVol.text( Math.round(totalGoodVolInt) ).formatNumber();
    // Set Total Default Volume
    $totalDefVol.text( Math.round(totalDefVolInt) ).formatNumber();
    // Set Average Loan size
    $avgLoanSize.text( Math.round(avgLoanSizeInt) ).formatNumber();
    // Set Total Number of Good Loans
    $totalNumGood.text( parseInt(totalNumGoodInt) );
    // Set Total Number of Defaulted Loans
    $totalNumDef.text( parseInt(totalNumDefInt) );
    // Set Supply Increase Total
    $totalSupplyInc.text( totalSupplyIncInt );
    // Set Supply Decrease from Lending Fee
    $supplyDecLendingAvg.text( supplyDecLendingInt );
    // Set Total Minted
    $('#totalToMint').text( Math.round(totalMint) + " YLD" ).formatNumber();
    // Set Total Burned
    $('#totalToBurn').text( Math.round(totalBurn) + " YLD" ).formatNumber();
    // Set Net Minted
    $('#netMint').text( Math.round(totalMint - totalBurn) + " YLD" ).formatNumber();

    //console.log('Rate of default')
  }














  var monthShort = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
  var now = new Date();
  var current = monthShort[now.getMonth()];
  var next = monthShort[now.getMonth()+1];

  var currentSupply = 622650;
  var supplyRate = totalMint - totalBurn;
  var myData = [currentSupply, Math.max(0,currentSupply + (supplyRate)), Math.max(0,currentSupply + (supplyRate*2)), Math.max(0,currentSupply + (supplyRate*3)), Math.max(0,currentSupply + (supplyRate*4)), Math.max(0,currentSupply + (supplyRate*5)), Math.max(0,currentSupply + (supplyRate*6)), Math.max(0,currentSupply + (supplyRate*7)), Math.max(0,currentSupply + (supplyRate*8)), Math.max(0,currentSupply + (supplyRate*9)), Math.max(0,currentSupply + (supplyRate*10)), Math.max(0,currentSupply + (supplyRate*11))];

  var ctx = document.getElementById('supply').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'],
          datasets: [{
              label: 'YLD Supply',
              data: myData,
              backgroundColor: [
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)',
                  'rgba(239, 188, 134, 0.2)'
              ],
              borderColor: [
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)',
                  'rgba(239, 188, 134, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scaleShowValues: true,
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false,
                      //min: Math.round( ((currentSupply + (supplyRate*11)) - currentSupply) / 1000 ) * 1000
                      min: Math.max(0,Math.min((Math.round( (currentSupply + (supplyRate*11)) / 1000 ) * 500), 500000))
                  }
              }],
              xAxes: [{
                ticks: {
                  autoSkip: false
                }
              }]
          },
          maintainAspectRatio: false,
          display: false,
          legend: {
              display: true,
              onClick: false,
              labels: {
                  // This more specific font property overrides the global property
                  fontColor: '#fff',
                  fontSize: 16,
                  fontFamily: 'IBM Plex Mono'
              }
          }
      }
  });

  var newData;

  $('.inputRange').change(updateValue);
  $('#totalLoans').change(updateValue);
  $('#avgLoanSize').change(updateValue);
  $('#avgYldPrice').change(updateValue);
  $('#avgInterest').change(updateValue);
  $('#defaultPct').change(updateValue);
  $('#lenderIntFee').change(updateValue);
  $('#maxYldReward').change(updateValue);
  $('#claimedEarlyRwd').change(updateValue);
  $('#unclaimedRwd').change(updateValue);

  $('.inputRange, #totalLoans, #avgLoanSize, #avgYldPrice, #avgInterest, #defaultPct, #lenderIntFee, #claimedEarlyRwd, #unclaimedRwd').change(function(){
    runNumbers();

    currentSupply = 622650;
    supplyRate = totalMint - totalBurn;
    newData = [currentSupply, Math.max(0,currentSupply + (supplyRate)), Math.max(0,currentSupply + (supplyRate*2)), Math.max(0,currentSupply + (supplyRate*3)), Math.max(0,currentSupply + (supplyRate*4)), Math.max(0,currentSupply + (supplyRate*5)), Math.max(0,currentSupply + (supplyRate*6)), Math.max(0,currentSupply + (supplyRate*7)), Math.max(0,currentSupply + (supplyRate*8)), Math.max(0,currentSupply + (supplyRate*9)), Math.max(0,currentSupply + (supplyRate*10)), Math.max(0,currentSupply + (supplyRate*11))];
    myData = newData;

    myChart.data.datasets[0].data = newData;
    myChart.config.options.scales.yAxes[0].ticks.min = Math.max(0,Math.min((Math.round( (currentSupply + (supplyRate*11)) / 1000 ) * 500), 500000));
    myChart.update();
  //  addData(myChart, newData);
    //console.log(newData);
  });

  // Default chart defined with type: 'line'
  Chart.defaults.global.defaultFontFamily = "IBM Plex Mono";
  // var ctx = document.getElementById('supply').getContext('2d');
  // var myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: myData
  // });

  var chartType;

  function updateChartType() {
    // Since you can't update chart type directly in Charts JS you must destroy original chart and rebuild
     myChart.destroy();
     myChart = new Chart(ctx, {
         type: chartType,
         data: {
             labels: ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'],
             datasets: [{
                 label: 'YLD Supply',
                 data: myData,
                 backgroundColor: [
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)',
                     'rgba(239, 188, 134, 0.2)'
                 ],
                 borderColor: [
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)',
                     'rgba(239, 188, 134, 1)'
                 ],
                 borderWidth: 1
             }]
         },
         options: {
             scaleShowValues: true,
             scales: {
                 yAxes: [{
                     ticks: {
                         beginAtZero: false,
                         //min: Math.round( ((currentSupply + (supplyRate*11)) - currentSupply) / 1000 ) * 1000
                         min: Math.max(0,Math.min((Math.round( (currentSupply + (supplyRate*11)) / 1000 ) * 500), 500000))
                     }
                 }],
                 xAxes: [{
                   ticks: {
                     autoSkip: false,
                   }
                 }]
             },
             maintainAspectRatio: false,
             display: false,
             legend: {
                 display: true,
                 onClick: false,
                 labels: {
                     // This more specific font property overrides the global property
                     fontColor: '#fff',
                     fontSize: 16,
                     fontFamily: 'IBM Plex Mono'
                 }
             }
         }
     });

  };

  // flat sliders init
  /*$.extend( $.ui.slider.prototype.options, {
      animate: 300
  });

  $("#flat-slider")
      .slider({
          max: 20000,
          min: 100,
          range: "min",
          value: 1000,
      })
      .slider("pips", {
          first: "pip",
          last: "pip"
      })
      .slider("float");
  */


  $('a.switch-chart').click(function(e){
    e.preventDefault();

    var $this = $(this);
    if( $this.hasClass('bar') ){
      chartType = 'line';
      $this.toggleClass('bar line');
    } else {
      chartType = 'bar';
      $this.toggleClass('bar line');
    }
    updateChartType();
  });

  function updateValue (e) {
    var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
    sibling.value = e.target.value;
  };


});
