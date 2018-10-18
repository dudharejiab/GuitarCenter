//Store DOM elements in variables
var imageInfo = document.getElementById("img-product");
var productInfo = document.getElementById("product-info");
var shippingInfo = document.getElementById("shipping-info");
var custReview = document.getElementById("cust-review");
var priceInfo = document.getElementById("price-info");
var availabilityInfo = document.getElementById("availability-info");
//Retrieve data from JSON file
var xhttp = new XMLHttpRequest();
xhttp.open("GET", "guitardata.json", true);
var count = 0;
xhttp.onload = function() {
  var data = JSON.parse(this.responseText);
  localStorage.myData = JSON.stringify(data);
  // console.log(localStorage.myData);
//Display data into DOM elements
  imageInfo.src = "images/" + data.allProducts[0].image_path;
  productInfo.innerHTML = data.allProducts[0].product_description;
  shippingInfo.innerHTML = data.allProducts[0].shipping_details;
  custReview.innerHTML = data.allProducts[0].customer_reviews;
  priceInfo.innerHTML = data.allProducts[0].price;
  availabilityInfo.innerHTML = data.allProducts[0].stock_availability;
//On click of next button
  var number = 1;
  next.addEventListener("click", function() {
    if (count == 3) {
      number = 0;
      count = -1;
    } else {
      number = count + 1;
    }
    count++;
    imageInfo.src = "images/" + data.allProducts[number].image_path;
    productInfo.innerHTML = data.allProducts[number].product_description;
    shippingInfo.innerHTML = data.allProducts[number].shipping_details;
    custReview.innerHTML = data.allProducts[number].customer_reviews;
    priceInfo.innerHTML = data.allProducts[number].price;
    availabilityInfo.innerHTML = data.allProducts[number].stock_availability;
  });
//On click of previous button
  prev.addEventListener("click", function() {
    if (count == 0) {
      number = 3;
      count = 4;
    } else {
      number = count - 1;
    }
    count--;
    imageInfo.src = "images/" + data.allProducts[number].image_path;
    productInfo.innerHTML = data.allProducts[number].product_description;
    shippingInfo.innerHTML = data.allProducts[number].shipping_details;
    custReview.innerHTML = data.allProducts[number].customer_reviews;
    priceInfo.innerHTML = data.allProducts[number].price;
    availabilityInfo.innerHTML = data.allProducts[number].stock_availability;
  });
};

xhttp.send();
//Make the div collapsible
var productDetails = document.getElementsByClassName("collapsible");
var i;
for(i = 0; i < productDetails.length ; i++){
  productDetails[i].addEventListener("click",function(){
    console.log("button clicked");

    this.classList.toggle ('active');
    var content = this.nextElementSibling;
    if(content.style.display == 'block'){
      content.style.display = 'none';
    } else{
      content.style.display = 'block';
    }
  });
}
// productDetails.addEventListener('click',function() {
//   document.getElementById('')
// });

buy.addEventListener('click',function(){
localStorage.curGuitar = count;
location.href = 'orderPurchase.htm';
});


