var cartArr = JSON.parse(localStorage.getItem("cartItems"));

document.querySelector("tbody").innerHTML = "";

cartArr.map(function (elem, index) {
  var tr = document.createElement("tr"); //div2 - append(image,name)

  //img creation
  var tdimage = document.createElement("img");
  tdimage.setAttribute("class", "tdimage");
  tdimage.setAttribute("src", elem.image_Url); // image display

  //productname creation
  var tdname = document.createElement("td");
  tdname.textContent = elem.name;
  tdname.setAttribute("class", "tdname");

  // div flex for input remove or update
  var divflex = document.createElement("div");
  divflex.setAttribute("class", "divflex");

  var tdinput = document.createElement("input");
  tdinput.setAttribute("class", "tdinput");
  tdinput.type="number"
  var value = (tdinput.value = 1);

  //update cart qnty image cum button
  var update = document.createElement("img");
  update.setAttribute(
    "src",
    "https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/refresh-512.png"
  );
  update.setAttribute("class", "update");
  update.addEventListener("click", function () {
    alert("update value");
    updateVlue(value);
  });

  // remove qty image cum button
  var remove = document.createElement("img");
  remove.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEcB33hejdFGHnclkubEnfMpvGxe8-GVtYODOo5xmPQND2poICXj11eRg1q4SHBZxsf0&usqp=CAU"
  );
  remove.setAttribute("class", "remove");
  remove.addEventListener("click", function () {
    alert("this item wil remove from your cart");
    removeItem(elem);
  });

  var tdtotal = document.createElement("td");
  tdtotal.textContent = elem.price * value;
  tdtotal.setAttribute("class", "tdtotal");

  // price creation
  var tdprice = document.createElement("td");
  tdprice.textContent = "₹" + " " + elem.price + ".00"; //price display
  tdprice.style.borderTop = "0.5px solid lightgrey";
  tdprice.style.borderBottom = "0.5px solid lightgrey";
  // tdprice.style.borderTopWidth="1px";
  // tdprice.style.borderBottomWidth="1px";
  tdprice.setAttribute("class", "tdprice");



  //----arraycartpush try------->

  // var cartList = {
  //   image: elem.image_Url,
  //   name: elem.name,
  //   inputValue: tdinput.value,
  //   update: update.setAttribute(
  //     "src",
  //     "https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/refresh-512.png"
  //   ),
  //   remove: remove.setAttribute(
  //     "src",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCEcB33hejdFGHnclkubEnfMpvGxe8-GVtYODOo5xmPQND2poICXj11eRg1q4SHBZxsf0&usqp=CAU"
  //   ),
  //   total: elem.price * value,
  // };

  // console.log(cartList);





  ////appending ---------------->
  divflex.append(update, remove);
  tr.append(tdimage, tdname, tdinput, divflex, tdprice, tdtotal); //apending image,name, divflex price total to tr

  document.querySelector("tbody").append(tr); //apending tr to tbody
});

// adding amounts
var count = 0;
var total = cartArr.reduce(function (ac, cv) {
  count++;
  return ac + Number(cv.price);
}, 0);

document.querySelector("h2").textContent = `Total ₹ ${total}`;

//---------------payment process texts--------->//

var processtext = document.createElement("div");
processtext.setAttribute("class", "processtext");

document.querySelector(".htag").textContent = "What Would you like to do next?";

document.querySelector(".ptag").textContent =
  "Choose if you have a discount code of or reward points you want to use or would like to estimate your delivey const.";


  // <-------coupon code -------->
  
/////!------ remove item from cart-------///
