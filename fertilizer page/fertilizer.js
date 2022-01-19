var fertilizeritem = JSON.parse(localStorage.getItem("fertilizerData"));
fertilizeritem.map(function(elem) {

    var div = document.createElement("div");


    var img = document.createElement("img");
    img.setAttribute("src", elem.image);

    var p1 = document.createElement("p")
    p1.textContent = elem.name
    p1.setAttribute("id", "name")

    var p2 = document.createElement("p")
    p2.textContent = "RS" + " " + elem.price + ".00";

    var button = document.createElement("button")
    button.textContent = "Add to Cart"


    div.append(img, p1, p2, button);
    document.querySelector("#container").append(div)
});