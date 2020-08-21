// Coupon Code pop up message

var couponCd = document.querySelector('#button-addon3');
var quantityList = document.querySelectorAll('.quantity');
for (var i = quantityList.length - 1; i >= 0; i--) {
    console.log(quantityList[i].value);
}


couponCd.addEventListener('click' , function(){
    var copCdvalue = document.querySelector('.form-control').value;
    if(copCdvalue.length == 0){
        alert('Please apply coupon code');
    } else {
        alert('Coupon Code Applied!!');
    }
});


function incrementQuantity(i)
{  i = parseInt(i);
  var value = quantityList[i-1].value;
  
 value = isNaN(value) ? 0 : value;
    if(value<10){
        value++;

    quantityList[i-1].value = value;
     
}

}


function decrementQuantity(i)
{
    i = parseInt(i);
    var value = quantityList[i-1].value;
    value = isNaN(value) ? 0 : value;
    if(value>1){
        value--;
        quantityList[i-1].value = value;
    }
    
}



var priceList = document.querySelectorAll('.price');
for (var i = priceList.length - 1; i >= 0; i--) {
    console.log(priceList[i].value);
}



var totalPrice = parseInt(document.getElementById('totalPrice').value);
totalPrice = isNaN(totalPrice) ? 0 :totalPrice;


function updatePrice()
{   var sum=0;
    
    for (var i = 0 ; i <= quantityList.length - 1; i++) {
        sum = sum + quantityList[i].value*priceList[i].value;
    } 
    
    return sum;

}

totalPrice.value = updatePrice();
console.log(updatePrice());