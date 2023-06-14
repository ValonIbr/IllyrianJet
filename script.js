// animacioni tek navbari
var searchMeny = document.getElementById("searchMeny");
var homeMeny = document.getElementById("homeMeny");
var hotelMeny = document.getElementById("hotelMeny");

function aktive(i){
    if(i == 1){
        homeMeny.classList.add("navAnimacion");
        searchMeny.classList.remove("navAnimacion");
        hotelMeny.classList.remove("navAnimacion");
    }
    else if(i == 2){
        homeMeny.classList.remove("navAnimacion");
        searchMeny.classList.add("navAnimacion");
        hotelMeny.classList.remove("navAnimacion");
    }
    else {
        homeMeny.classList.remove("navAnimacion");
        searchMeny.classList.remove("navAnimacion");
        hotelMeny.classList.add("navAnimacion");
    }
}

