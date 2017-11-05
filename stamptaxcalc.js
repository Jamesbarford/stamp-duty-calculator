

function openMenu (){
  var navigation = document.querySelectorAll('.navi');

    if (navigation.length > 0) {
      for (var i = 0; i < navigation.length; i++) {
        navigation[i].classList.toggle ('open');
      }
    }
  }


function calcStampDuty(price) {

  var price = document.getElementById('purchase-price').value;
  var variablePortion = 0;
  var stampTax = 0;
  var taxableAmount = 0;
  var taxBand = [];
  var moreTax = [0.03, 0.05, 0.08, 0.13, 0.15];

  function t () {
    if (document.getElementById('additional-home').checked) {
      taxBand = moreTax;
    } else {
      taxBand = [0, 0.02, 0.05, 0.1, 0.12];
    }
  };
  t();

  function calculation (price) {
    if (price <= 125000) {
      // Below £125,000.01, there's no Stamp Duty to pay on residential properties in the UK
      taxableAmount = price;
      stampTax = taxableAmount * taxBand[0];
      Math.floor(stampTax);
    }
    if (price >= 125001 && price <= 250000) {
      // Between £125,001 and £250,000, 2% is payable on the amount above £125,000
      // but below £250,000
      taxableAmount = price - 125000;
      stampTax = taxableAmount * taxBand[1];
      Math.floor(stampTax);
    }
    if (price >= 250001 && price <= 925000) {
      // Between £250,001 and £925,000, 5% is payable on the amount above £250,000
      variablePortion = price - 250000;
      stampTax = variablePortion * taxBand[2] + 2500;
      Math.floor(stampTax);
    }
    if (price >= 925001 && price <= 1500000) {
      // Between £925,001 and £1,500,000, 10% is payable on the amount above £925,000
      variablePortion = price - 925000;
      stampTax = variablePortion * taxBand[3] + 36250;
      Math.floor(stampTax);
    }
    if (price > 1500000) {
      // Over £1.5m, 12% is payable for that portion
      variablePortion = price - 1500000;
      stampTax = variablePortion * taxBand[4] + 93750;
      Math.floor(stampTax);
    }

    var result = document.getElementById('tax');
    var numberInCurreny = stampTax.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits:2}); //format money
    result.textContent = '\u00A3' + numberInCurreny; // display money

    var effectiveRate = (stampTax/price) * 100;
    var g = Math.round(effectiveRate * 10 ) / 10;
    var h = g.toFixed(1);
    var rate = document.getElementById('rate');
    rate.textContent = h + '%';

    document.getElementById('purchase-amount').textContent = '\u00A3' + price;
  };

  calculation (price);
};

var VHChromeFix=function(e){var t=this,n=navigator.userAgent.toLowerCase(),i=/chrome/.test(n)&&/android/.test(n),l=/crios/.test(n);(i||l)&&(this.getElements(e),this.fixAll(),this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight,window.addEventListener("resize",function(){t.windowWidth!==window.innerWidth&&t.windowHeight!==window.innerHeight&&(t.windowWidth=window.innerWidth,t.windowHeight=window.innerHeight,t.fixAll())}))};VHChromeFix.prototype.getElements=function(e){this.elements=[],e=this.isArray(e)?e:[e];for(var t=0;t<e.length;t++)for(var n=e[t].selector,i=document.querySelectorAll(n),l=0;l<i.length;l++)this.elements.push({domElement:i[l],vh:e[t].vh})},VHChromeFix.prototype.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)},VHChromeFix.prototype.fixAll=function(){for(var e=0;e<this.elements.length;e++){var t=this.elements[e];t.domElement.style.height=window.innerHeight*t.vh/100+"px"}};
