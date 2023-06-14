
//kerkimi i fluturimeve
var fluturimet = document.getElementById("fluturimet");
var shkurtesa = document.getElementsByClassName("shkurtesa");
var vendi = document.getElementsByClassName("vendi");

function shfaqiFluturimet(){
    var tek = document.getElementById("tek").value;
    
    if(tek == "Sabiha Gokcen - Istanbul"){
        
        
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "IST"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "Istanbul";
        }
    }
    else if(tek == "Berlin Brandenburg Airport"){
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "BRN"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "Berlin";
        }
        
        
    }
    else if(tek == "Zurich International Airport"){
        
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "CH"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "Zurich";
        }
    }
    else if(tek == "John F. Kennedy International Airport - New York"){
        
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "NYC"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "New York";
        }
    }
    else if(tek == "Vienna International Airport"){
        
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "VIE"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "Vienna";
        }
    }
    else if(tek == "Stockholm Arlanda Airport"){
        
        for(let i = 0; i< shkurtesa.length; i++){
            shkurtesa[i].innerHTML = "STK"
        }
        for(let i = 0; i< vendi.length; i++){
            vendi[i].innerHTML = "Stockholm";
        }
    }
    fluturimet.style.display = "block";
}