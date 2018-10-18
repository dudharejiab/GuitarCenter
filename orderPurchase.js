//Store localstorage data from index.html
var data = JSON.parse(localStorage.myData);
var count = localStorage.curGuitar;
//Fill HTML elements with json data
document.getElementById("purchase-product-image").src =
  "images/" + data.allProducts[count].image_path;
document.getElementById("purchase-product-info").innerHTML =
  data.allProducts[count].product_description;
document.getElementById("purchase-customer-review").innerHTML =
  data.allProducts[count].customer_reviews;
document.getElementById("purchase-availability").innerHTML =
  data.allProducts[count].no_of_items;
document.getElementById("purchase-price").innerHTML =
  data.allProducts[count].price;
//Calculate total price
var shippingCost = data.allProducts[count].shipping_details;
document.getElementById("purchase-shipping-info").innerHTML = shippingCost;
var shippingCharge = parseFloat(shippingCost.substr(22, 24));
var price = data.allProducts[count].price;
var priceCost = parseFloat(price.substr(1, 7));
var totalPrice = priceCost + shippingCharge;
document.getElementById("purchase-price").innerHTML = "$" + totalPrice;
if (window.localStorage) {
  localStorage.setItem("totalPrice", totalPrice);
}
//Display form
function showForm() {
  var x = document.getElementById("customer-form");
  x.setAttribute("style", "visibility: visible");
}
//Validate form fields
function validateForm() {
  var fName = document.forms["purchase-form"]["firstName"].value;
  var lName = document.forms["purchase-form"]["lastName"].value;
  var addr1 = document.forms["purchase-form"]["address1"].value;
  var city = document.forms["purchase-form"]["city"].value;
  var pin = document.forms["purchase-form"]["pincode"].value;
  var cc = document.forms["purchase-form"]["card-number"].value;
  var cvv = document.forms["purchase-form"]["cvv"].value;
  var state = document.getElementById("state").value;

  var conditions = true;
  if (conditions == true) {
    if (fName == null || !isNaN(fName)) {
      document.getElementById("fname").style.backgroundColor = "red";
      alert("Enter First Name");
    }
    if (lName == null || !isNaN(lName)) {
      document.getElementById("lname").style.backgroundColor = "red";
      alert("Enter Last Name");
    }
    if (addr1 == null || !isNaN(addr1)) {
      document.getElementById("address-line-1").style.backgroundColor = "red";
      alert("Enter address");
    }
    if (city == null || !isNaN(city)) {
      document.getElementById("city").style.backgroundColor = "red";
      alert("Enter city");
    }
    if (pin == null || pin.length != 5) {
      document.getElementById("pincode").style.backgroundColor = "red";
      alert("Enter pin code");
    }
    if (cc == null || cc.length != 10) {
      document.getElementById("card-number").style.backgroundColor = "red";
      alert("Enter credit card number");
    }
    if (cvv == null || cvv.legth < 3 || cvv.legth > 4) {
      document.getElementById("cvv").style.backgroundColor = "red";
      alert("Enter cvv");
    }
    if (state == null) {
      alert("Please Select State");
    }
  }
  showDetails(); //Onclik of review order summary cutomer details should be displayed.
}
//Display details on click of review order summary button
function showDetails() {
  document.getElementById("display-purchase-details").style.display = "block";
  document.getElementById("buy").style.display = "block";
  document.getElementById("edit").style.display = "block";
  console.log("function show details called.");
  var fName = document.forms["purchase-form"]["firstName"].value;
  var lName = document.forms["purchase-form"]["lastName"].value;
  var addr1 = document.forms["purchase-form"]["address1"].value;
  var addr2 = document.forms["purchase-form"]["address2"].value;
  var phone = document.forms["purchase-form"]["phone-number"].value;
  var email = document.forms["purchase-form"]["email"].value;
  var city = document.forms["purchase-form"]["city"].value;
  var pin = document.forms["purchase-form"]["pincode"].value;
  var cc = document.forms["purchase-form"]["card-number"].value;
  var cvv = document.forms["purchase-form"]["cvv"].value;
  var state = document.getElementById("state").value;

  document.getElementById("dFName").innerHTML = fName;
  document.getElementById("dLName").innerHTML = lName;
  document.getElementById("dtl-phone-no").innerHTML = phone;
  document.getElementById("dtl-email").innerHTML = email;
  document.getElementById("dtl-addressline-1").innerHTML = addr1;
  document.getElementById("dtl-addressline-2").innerHTML = addr2;
  document.getElementById("dCity").innerHTML = city;
  document.getElementById("dState").innerHTML = state;
  document.getElementById("dPin").innerHTML = pin;

  document.getElementById("form").style.display = "none";
}
//Edit forms details - Fill form fields with html elements data
function editDetails() {
  document.getElementById("form").style.display = "block";

  document.forms["purchase-form"]["firstName"].value = document.getElementById(
    "dFName"
  ).innerHTML;
  document.forms["purchase-form"]["lastName"].value = document.getElementById(
    "dLName"
  ).innerHTML;
  document.forms["purchase-form"]["address1"].value = document.getElementById(
    "dtl-addressline-1"
  ).innerHTML;
  document.forms["purchase-form"]["address2"].value = document.getElementById(
    "dtl-addressline-2"
  ).innerHTML;
  document.forms["purchase-form"][
    "phone-number"
  ].value = document.getElementById("dtl-phone-no").innerHTML;
  document.forms["purchase-form"]["email"].value = document.getElementById(
    "dtl-email"
  ).innerHTML;
  document.forms["purchase-form"]["city"].value = document.getElementById(
    "dCity"
  ).innerHTML;
  document.forms["purchase-form"]["pincode"].value = document.getElementById(
    "dPin"
  ).innerHTML;
  document.getElementById("state").value = document.getElementById(
    "dState"
  ).innerHTML;
}
//Take to confirmation page
buy.addEventListener("click", function() {
  localStorage.curGuitar = count;
  location.href = "confirmation.html";
});
