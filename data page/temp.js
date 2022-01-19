< !DOCTYPE html >
    <
    html lang = "en" >

    <
    head >
    <
    meta charset = "UTF-8" >
    <
    meta http - equiv = "X-UA-Compatible"
content = "IE=edge" >
    <
    meta name = "viewport"
content = "width=device-width, initial-scale=1.0" >
    <
    title > Document < /title>

<!-- <style>
#
view {
    background - color: #5a6981;

            width: 70%;

            padding: 1px 20px;

            color: white;

            font-size: 18px;

        }

        

        # container {
        display: grid;
        grid - template - columns: repeat(6, 1 fr);
        grid - gap: 1 % 1 % ;
        width: 70 % ;
        margin: auto;
    }

    img {
        width: 100 % ;
        margin: 0 0;
    }

    #
    container > div {
        text - align: center;
        border: 1 px solid white;
    }

    #
    container > div: hover {
        border: 1 px solid grey;
    }

    #
    container > div > div {
        display: flex;
        justify - content: space - around;
        margin: 0 auto 0;
    }

    #
    strikedpriced {
        text - decoration: line - through;
        color: #eb2d51;
    }

    button {
        padding - left: 15 px;
        color: #9a9da6;

            margin: 0 auto;

        }

        

        button:hover,

        p:hover {

            color: teal;

        }

        

        # name {
                width: 60 % ;
                margin: 0 auto;
            }
            /* small screen */

        @media only screen and(min - width: 0 px) and(max - width: 320 px) {#
                container {
                    display: grid;
                    grid - template - columns: repeat(2, 1 fr);
                    grid - gap: 1 % 1 % ;
                    width: 100 % ;
                }
            }
            /* medium screen */

        @media only screen and(min - width: 320 px) and(max - width: 720 px) {#
            container {
                display: grid;
                grid - template - columns: repeat(4, 1 fr);
                grid - gap: 1 % 1 % ;
                margin: auto;
            }
            button {
                color: #9a9da6;

                padding: 0;

                margin: 0 auto;

            }

            # name {
                    height: 20 px;
                }
            } <
            /style> --> <
            /head>

            <
            body >

                <
                div id = "view" >
                <
                p > Special Offers < /p> <
                /div>

            <
            div id = "container" >

                <
                /div> <
                /body>

            <
            /html>

            <!-- <script>
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
                }) <
                /script> --> <
                script src = "https://kit.fontawesome.com/c83c965a44.js"
            crossorigin = "anonymous" > < /script> <
                script src = "data.js" > < /script>ocument.createElement("div")

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
        }) <
    /script> <
    script src = "https://kit.fontawesome.com/c83c965a44.js"
    crossorigin = "anonymous" > < /script> <
    script src = "data.js" > < /script>uru.com/image / cache / data / Flower % 20 Bulbs / plants - guru - flowering - bulbs - daffodil - fragrance - 800 x800.jpg ",
    name: "Euphorbia Mammillaris Variegata Cactus Plant ",
        strikedpriced: 599,
        price: 499,
}, ];

localStorage.setItem("salesData", JSON.stringify(salespagedata))


//  Fertilizer Page Data

var fertilizersdata = [{
    image: "https: //www.plantsguru.com/image/cache/data/Fertilizers/IMG_20160520_165102-400x400.jpg",
    name: "Bio Fertilizer - Organic Fertilizer, Plant Booster Spray (Pack of 4 Liquids)",
    price: 249,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/Plantsguru-fertilizers-stear-meal-800x800.jpg",
    name: "Bio Grow - 1 KG",
    price: 280,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/fertilizers/pg-potting-mix-800x800.jpg",
    name: "Bonsai Potting Mix (1kg) - Bonsai Soil",
    price: 249,
}, {
    image: "https://www.plantsguru.com/image/cache/Geo%20Bags/pg-coco-chips-800x800.jpg",
    name: "Coco Chips - 1KG",
    price: 199,
}, {
    image: "https://www.plantsguru.com/image/cache/Geo%20Bags/pg-coco-chips-800x800.jpg",
    name: "Coco Chips - 5KG Brick",
    price: 499,
}, {
    image: "https://www.plantsguru.com/image/cache/Geo%20Bags/coir3-800x800.jpg",
    name: "Coco Soil - Coco Peat, Coco Brick 1 KG",
    price: 99,
}, {
    image: "https://www.plantsguru.com/image/cache/Geo%20Bags/pg-coco-peat-800x800.jpg",
    name: "Coco Soil - Coco Peat, Coco Brick 5 KG",
    price: 499,
}, {
    image: "https://www.plantsguru.com/image/cache/Geo%20Bags/pg-cocopeat-powder-1kg-800x800.jpg",
    name: "Coco Soil - Coco Peat, Coco Powder (1KG)",
    price: 99,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/Plantsguru-fertilizers-vermicompost-800x800.jpg",
    name: "Cow Manure - 3KG",
    price: 480,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/fertilizers/g5-granules-800x800.jpg",
    name: "G5 Bio Organic Granules (500gm)",
    price: 189,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/plantsguru-fertilizers-garden-angel-800x800.jpg",
    name: "Garden Angel Fertilizer - 1KG",
    price: 299,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/fertilizers/green-field-fertilizer-800x800.jpg",
    name: "Green Field Lawn Food (500gm)",
    price: 230,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/plantsguru-ferilizers-green-gold-800x800.jpg",
    name: "Green Gold Organic Fertilizer - Plant Booster 500 Grams",
    price: 260,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/Plantsguru-fertilizers-growtabbs-800x800.png",
    name: "Grow Tab Organic Plant Booster - Organic Fertilizer 100 Grams",
    price: 150,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/pg-moist-ball-800x800.jpg",
    name: "Hydro Clay Balls (500grms)",
    price: 350,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/plants-guru-fertilizers-maxi-grow-800x800.jpg",
    name: "Maxi Grow Organic Plant Booster - Organic Fertilizer",
    price: 25,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/pg-hydro-clay-ball-800x800.jpg",
    name: "Moist Balls 16MM(1KG)",
    price: 450,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/Garden%20Tools/pg-moss-stick-800x800.jpg",
    name: "Moss Stick (2.5Feet)",
    price: 199,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Jasmine/plants-guru-annual-flowering-kamini-plant-800x800.jpg",
    name: "Moss Stick (2Feet)",
    price: 179,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/Garden%20Tools/pg-moss-stick-800x800.jpg",
    name: "Moss Stick (3Feet)",
    price: 299,
}, {
    image: "https://www.plantsguru.com/image/cache/data/Fertilizers/Plantsguru-fertilizers-neem-cake-800x800.png",
    name: "Neem Cake Fertilizer - 1KG",
    price: 190,
}, ];


localStorage.setItem("fertilizerData", JSON.stringify(fertilizersdata))


//    Garden Page Data 

var garden = [{
    image: "https://www.plantsguru.com/image/cache/garden-tools/pot-stand/3-step-stand-for-pots-800x800.jpeg",
    name: "3 Step Stand for Pots",
    price: 1299,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/pot-stand/bicycle-stand-white-small-800x800.jpg",
    name: "Bicycle Shape White Small Pot Stand",
    price: 699,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/8-Bypass-Pruner-Pruning-Secateurs-Shears-Garden.jpg_350x350-800x800.jpg",
    name: "Bypass Pruner Garden Tool",
    price: 449,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/pot-stand/cycle-stand-black-800x800.jpg",
    name: "Cycle Stand Black",
    price: 699,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/_DSC2150-800x800.JPG",
    name: "Embossed Water Can In Purple Color",
    price: 799,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/_DSC2149-800x800.JPG",
    name: "Embossed Water Can In Red Color",
    price: 799,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/_DSC2152-800x800.JPG",
    name: "Embossed Water Can In Yellow Colour",
    price: 799,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/fairy-garden/fairy-garden-mashroom-800x800.jpg",
    name: "Fairy Garden Mashroom",
    price: 149,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/fairy-garden/fairy-garden-mashroom-ceramic-mix-800x800.jpg",
    name: "Fairy Garden Mashroom Ceramic Mix(Set of 4)",
    price: 349,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/pg-floral-yellow-hand-painted-water-can-800x800.JPG",
    name: "Floral Yellow Hand Painted Water Can",
    price: 849,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-fountain/Garden-fountain-with-ganesha-polyresin-800x800.jpg",
    name: "Garden Fountain With Ganesha",
    price: 545,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-fountain/garden-fountain-with-monk-buddha-polyresin-800x800.jpeg",
    name: "Garden Fountain With Mon Buddha",
    price: 545,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/garden-tool-kit-800x800.jpg",
    name: "Garden Tool Kit",
    price: 999,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/garden-tool-set-of-4-800x800.jpg",
    name: "Garden Tool Set of 4",
    price: 549,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/garden-tool-set-of-5-800x800.jpeg",
    name: "Garden Tool Set of 5",
    price: 749,
}, {
    image: "https://www.plantsguru.com/image/cache/catalog/planters/grow-bag/geo-planter-with-handel-800x800.jpg",
    name: "Geo Fabric Grow Bag Round 1",
    price: 249,
}, {
    image: "https://www.plantsguru.com/image/cache/data1/bird-feeder-800x800.jpeg",
    name: "Hanging Bird Feeder",
    price: 499,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/pg-hanging-bird-house-round-blue-800x800.JPG",
    name: "Hanging Bird House Round Blue",
    price: 795,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/bird-house/bird-house-red-round-800x800.jpg",
    name: "Hanging Bird House Round Red",
    price: 795,
}, {
    image: "https://www.plantsguru.com/image/cache/metal-planter/pg-hanging-bird-house-round-yellow-800x800.JPG",
    name: "Hanging Bird House Round Yellow",
    price: 795,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/terrarium-garden/hanging-glass-round-terrarium-800x800.jpg",
    name: "Hanging Glass Round Terrarium",
    price: 699,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/terrarium-garden/hanging-terrarium-with-air-plant-800x800.jpg",
    name: "Hanging Terrarium with Air Plant",
    price: 1099,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/pruning-shear-secateur-garden-cutter-800x800.jpg",
    name: "Pruning Shear Secateur Garden Cutter",
    price: 499,
}, {
    image: "https://www.plantsguru.com/image/cache/garden-tools/garden-tools/watering-can-10-ltrs-800x800.png",
    name: "Watering Can - Watering Sprikle, Watering Jar (10 Ltrs)",
    price: 689,
}, ];

localStorage.setItem("gardenData", JSON.stringify(garden));