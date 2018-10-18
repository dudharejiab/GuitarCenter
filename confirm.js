//Store localstorage data from index.html
var data = JSON.parse(localStorage.myData);
var count = localStorage.curGuitar;
if(window.localStorage){
   var finalPrice = localStorage.getItem('totalPrice');
}
//Fill HTML elements with json data
document.getElementById('image-confirm').src = 'images/' + data.allProducts[count].image_path;
document.getElementById('confirm-product-description').innerHTML = data.allProducts[count].product_description;
document.getElementById('confirm-product-custRvw').innerHTML = data.allProducts[count].customer_reviews;
document.getElementById('confirm-product-availability').innerHTML = data.allProducts[count].no_of_items;
document.getElementById('confirm-total-price').innerHTML = '$' + finalPrice;
//Generate Order number
var orderNo = 0001;
document.getElementById('order-number').innerHTML = '# ' + orderNo;
orderNo += 1;
//Take to confirmation page
btnHome.addEventListener('click',function(){
    localStorage.curGuitar = count;
    location.href = 'index.html';
});


