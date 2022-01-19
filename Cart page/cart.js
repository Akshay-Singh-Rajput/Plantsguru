var cartArr = JSON.parse(localStorage.getItem("cartItems"));

cartArr.map(function (elem,index) {
    var tr = document.createElement("tr");   //div2 - append(image,name)
  
    //img creation
    var tdimage = document.createElement("img");
    tdimage.setAttribute("class","tdimage")
    tdimage.setAttribute("src", elem.image_Url);   // image display
    
   //product model
   var tdmodel = document.createElement("td");
   tdmodel.textContent="modeldemo"
   
   
    //productname creation
    var tdname = document.createElement("td");
    tdname.textContent = elem.name;
    tdname.setAttribute("class","tdname")               
  
    // var div3 = document.createElement("td")      
     
    var tdqnty = document.createElement("td");
    tdqnty.textContent = "qntydemo";

    var tdtotal = document.createElement("td");
    tdtotal.textContent = "totaldemo"
  
    // price creation
    var tdprice = document.createElement("td");
    tdprice.textContent = "₹" + " " + elem.price + ".00";   //price display
    tdprice.style.borderTop = "0.5px solid lightgrey";
    tdprice.style.borderBottom = "0.5px solid lightgrey";
    tdprice.style.borderTopWidth="1px";
    tdprice.style.borderBottomWidth="1px";
  
    var line = document.createElement("hr")
    line.style.width = "100px"             
    tr.append(tdimage,tdname,tdmodel,tdqnty,tdprice,tdtotal);               //apending image,name, div3 to div2  
  
    document.querySelector("tbody").append(tr,line)                     //apending div2 to container
  });
 

