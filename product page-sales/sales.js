var saleitems = JSON.parse(localStorage.getItem("salesData"))

saleitems.map(function(elem) {
    var div = document.createElement("div")

    var img = document.createElement("img")
    img.setAttribute("src", elem.image)


    var p = document.createElement("p");
    p.textContent = elem.name
    p.setAttribute("id", "name")


    var div2 = document.createElement("div")


    var p1 = document.createElement("p")
    p1.textContent = "RS" + " " + elem.strikedpriced
    p1.setAttribute("id", "strikedpriced")

    var p2 = document.createElement("p")
    p2.textContent = "RS" + " " + elem.price

    div2.append(p1, p2)

    var button = document.createElement("button")
    button.textContent = "Add to Cart"

    div.append(img, p, div2, button)
    document.querySelector("#container").append(div)
})