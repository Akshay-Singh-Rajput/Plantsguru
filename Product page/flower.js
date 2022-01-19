// Only images
var flowerImage = JSON.parse(localStorage.getItem("flowerImage"));

flowerImage.map(function (elem) {
  var div1 = document.createElement("div");   //div1 - append(image,name)
  div1.setAttribute('class',"div1")           //class - div1       
  //img creation
  var onlyimage = document.createElement("img"); 
  onlyimage.setAttribute("src", elem.image_Url);     // image display

  var name = document.createElement("p");
  name.textContent = elem.name;                      // name display


  div1.append(onlyimage,name);                //appending to div1

  container.append(div1);                        //appending div1 to container
});


//Buy products image started
var gridimage = JSON.parse(localStorage.getItem("gridimage"));

var cartArr = JSON.parse(localStorage.getItem("cartItems")) || [];


gridimage.map(function (elem) {
  var div2 = document.createElement("div");   //div2 - append(image,name)

  //img creation
  var image = document.createElement("img");
  image.setAttribute("src", elem.image_Url);   // image display

  //name creation
  var name = document.createElement("h4");
  name.textContent = elem.name;                // name display

  var div3 = document.createElement("div")       //div3 - append(price,btn)
        

  // price creation
  var price = document.createElement("h4");
  price.textContent = "₹" + " " + elem.price + ".00";   //price display
  price.style.borderTop = "0.5px solid lightgrey";
  price.style.borderBottom = "0.5px solid lightgrey";
  price.style.borderTopWidth="1px";
  price.style.borderBottomWidth="1px";

  //cartbtn creation
  var cartbtn = document.createElement("button");
  cartbtn.addEventListener("click",function(){
      addTocart(elem);
    });
    cartbtn.setAttribute("id","cartbtn");                 //add to cart btn
    cartbtn.textContent = "Add to Cart";

  div3.append(price, cartbtn)                      //apending btn price to div3            
  div2.append(image,name,div3);               //apending image,name, div3 to div2  

  container.append(div2);                     //apending div2 to container
});
function addTocart(elem){
    cartArr.push(elem);
    localStorage.setItem("cartItems", JSON.stringify(cartArr));
    alert("Added to Cart");
};

var next = document.createElement("p")
  next.textContent = "NEXT";
//   next.style.width = "100%";
  next.style.border ="1px solid red";
  container.append(next)