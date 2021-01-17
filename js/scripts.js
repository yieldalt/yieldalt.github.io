$(document).ready(function(){

// Loan Vars
var totalLoans = $('input#totalLoans').val();
var avgLoanSize = $('input#avgLoanSize').val();
var defaultPct = $('input#defaultPct').val();
var avgInterest = $('input#avgInterest').val();
var avgInterestPerc = avgInterest * 0.01;
var avgYldPrice = $('input#avgYldPrice').val();
var lenderIntFee = $('input#lenderIntFee').val();
var maxYldReward = 350;

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
var liquidationFee = 0.07 * avgLoanSize;

var goodFees = (lendFee + borrowFee) * totalNumGoodInt;
var defaultFees = liquidationFee * totalNumDefInt;

var totalFees = goodFees + defaultFees;
var totalBurn = totalFees / avgYldPrice;
//var perLoanSupplyIncInt = (avgInterest - 1) * 0.01 * avgLoanSize / avgYldPrice;
var perLoanSupplyIncInt = Math.min((avgInterestPerc - 0.01) * avgLoanSize, (maxYldReward / avgYldPrice));
var totalMint = perLoanSupplyIncInt * totalNumGoodInt;

console.log('Total fees on good loans: $' + totalFees);
console.log('Total YLD to be burned: ' + totalBurn + ' YLD');
console.log('Total YLD to be minted (before burn): ' + totalMint + ' YLD');
console.log('Supply Increase - Supply Decrease: ' + (totalMint - totalBurn) + ' YLD');

var totalSupplyIncInt = totalNumGoodInt * perLoanSupplyIncInt;
var totalSupplyIncYldInt = totalSupplyIncInt * avgYldPrice;
var totalSupplyIncMinusDec = totalSupplyIncYldInt - ( totalFees / avgYldPrice );
//console.log('Total supply increase: ' + totalSupplyIncInt + ' YLD ($' + totalSupplyIncYldInt + ')');
//console.log('Supply Increase - Supply Decrease: ' + totalSupplyIncMinusDec );

var supplyDecLendingInt = ( avgLoanSize * avgInterestPerc * 0.02 ) / avgYldPrice;

// Set Total Gross Volume
$totalGrossVol.html( (avgLoanSize * totalLoans) ).formatNumber();
// Set Total Good Loans Volume
$totalGoodVol.html( totalGoodVolInt ).formatNumber();
// Set Total Default Volume
$totalDefVol.html( totalDefVolInt ).formatNumber();
// Set Average Loan size
$avgLoanSize.html( avgLoanSizeInt ).formatNumber();
// Set Total Number of Good Loans
$totalNumGood.html( totalNumGoodInt );
// Set Total Number of Defaulted Loans
$totalNumDef.html( totalNumDefInt );
// Set Supply Increase Total
$totalSupplyInc.html( totalSupplyIncInt );
// Set Supply Decrease from Lending Fee
$supplyDecLendingAvg.html( supplyDecLendingInt );
// Set Total Minted
$('#totalToMint').html( Math.round(totalMint) + " YLD" ).formatNumber();
// Set Total Burned
$('#totalToBurn').html( Math.round(totalBurn) + " YLD" ).formatNumber();
// Set Net Minted
$('#netMint').html( Math.round(totalMint - totalBurn) + " YLD" ).formatNumber();

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
  liquidationFee = 0.07 * avgLoanSize;

  goodFees = (lendFee + borrowFee) * totalNumGoodInt;
  defaultFees = liquidationFee * totalNumDefInt;

  totalFees = goodFees + defaultFees;
  totalBurn = totalFees / avgYldPrice;
  //perLoanSupplyIncInt = (avgInterest - 1) * 0.01 * avgLoanSize / avgYldPrice;
  perLoanSupplyIncInt = Math.min((avgInterestPerc - 0.01) * avgLoanSize, (maxYldReward / avgYldPrice));
  totalMint = perLoanSupplyIncInt * totalNumGoodInt;

  // console.log('perLoanSupplyIncInt' + perLoanSupplyIncInt);
  // console.log('Total fees on good loans: $' + totalFees);
  // console.log('Total YLD to be burned: ' + totalBurn + ' YLD');
  // console.log('Total YLD to be minted (before burn): ' + totalMint + ' YLD');
  // console.log('Supply Increase - Supply Decrease: ' + (totalMint - totalBurn) + ' YLD');

  // Set Total Gross Volume
  $totalGrossVol.html( Math.round(avgLoanSize * totalLoans) ).formatNumber();
  // Set Total Good Loans Volume
  $totalGoodVol.html( Math.round(totalGoodVolInt) ).formatNumber();
  // Set Total Default Volume
  $totalDefVol.html( Math.round(totalDefVolInt) ).formatNumber();
  // Set Average Loan size
  $avgLoanSize.html( Math.round(avgLoanSizeInt) ).formatNumber();
  // Set Total Number of Good Loans
  $totalNumGood.html( parseInt(totalNumGoodInt) );
  // Set Total Number of Defaulted Loans
  $totalNumDef.html( parseInt(totalNumDefInt) );
  // Set Supply Increase Total
  $totalSupplyInc.html( totalSupplyIncInt );
  // Set Supply Decrease from Lending Fee
  $supplyDecLendingAvg.html( supplyDecLendingInt );
  // Set Total Minted
  $('#totalToMint').html( Math.round(totalMint) + " YLD" ).formatNumber();
  // Set Total Burned
  $('#totalToBurn').html( Math.round(totalBurn) + " YLD" ).formatNumber();
  // Set Net Minted
  $('#netMint').html( Math.round(totalMint - totalBurn) + " YLD" ).formatNumber();

  //console.log('Rate of default')
}














var monthShort = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
var now = new Date();
var current = monthShort[now.getMonth()];
var next = monthShort[now.getMonth()+1];

var currentSupply = 625000
var supplyRate = totalMint - totalBurn;

//console.log(current);



var ctx = document.getElementById('supply').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [current, monthShort[now.getMonth()+1], monthShort[now.getMonth()+2], monthShort[now.getMonth()+3], monthShort[now.getMonth()+4], monthShort[now.getMonth()+5], monthShort[now.getMonth()+6], monthShort[now.getMonth()+7], monthShort[now.getMonth()+8], monthShort[now.getMonth()+9], monthShort[now.getMonth()+10], monthShort[now.getMonth()+11]],
        datasets: [{
            label: 'YLD Supply',
            data: [currentSupply, (currentSupply + (supplyRate)), (currentSupply + (supplyRate*2)), (currentSupply + (supplyRate*3)), (currentSupply + (supplyRate*4)), (currentSupply + (supplyRate*5)), (currentSupply + (supplyRate*6)), (currentSupply + (supplyRate*7)), (currentSupply + (supplyRate*8)), (currentSupply + (supplyRate*9)), (currentSupply + (supplyRate*10)), (currentSupply + (supplyRate*11))],
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
                    min: Math.round( (currentSupply + (supplyRate*11)) / 1000 ) * 750
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
//$('#maxYldReward').change(updateValue);

$('.inputRange, #totalLoans, #avgLoanSize, #avgYldPrice, #avgInterest, #defaultPct, #lenderIntFee').change(function(){
  runNumbers();

  currentSupply = 625000
  supplyRate = totalMint - totalBurn;
  newData = [currentSupply, (currentSupply + (supplyRate)), (currentSupply + (supplyRate*2)), (currentSupply + (supplyRate*3)), (currentSupply + (supplyRate*4)), (currentSupply + (supplyRate*5)), (currentSupply + (supplyRate*6)), (currentSupply + (supplyRate*7)), (currentSupply + (supplyRate*8)), (currentSupply + (supplyRate*9)), (currentSupply + (supplyRate*10)), (currentSupply + (supplyRate*11))];

  myChart.data.datasets[0].data = newData;
  myChart.config.options.scales.yAxes[0].ticks.min = Math.round( (currentSupply + (supplyRate*11)) / 1000 ) * 750;
  myChart.update();
//  addData(myChart, newData);
  //console.log(newData);
});

// $('input[type="submit"]').click(function(e){
//   e.preventDefault();
//   runNumbers();
//
//   currentSupply = 625000
//   supplyRate = totalMint - totalBurn;
//   newData = [currentSupply, (currentSupply + (supplyRate)), (currentSupply + (supplyRate*2)), (currentSupply + (supplyRate*3)), (currentSupply + (supplyRate*4)), (currentSupply + (supplyRate*5)), (currentSupply + (supplyRate*6)), (currentSupply + (supplyRate*7)), (currentSupply + (supplyRate*8)), (currentSupply + (supplyRate*9)), (currentSupply + (supplyRate*10)), (currentSupply + (supplyRate*11))];
//
//   myChart.data.datasets[0].data = newData;
//   myChart.update();
// //  addData(myChart, newData);
//   console.log(newData);
// });

function updateValue (e) {
  var sibling = e.target.previousElementSibling || e.target.nextElementSibling;
  sibling.value = e.target.value;
}



});
