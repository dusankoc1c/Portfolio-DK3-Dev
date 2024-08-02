myID = document.getElementById("myID");
/*LOAD FUNKCIJA ZA PRVI NASLOV*/ 
var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 200) {
        myID.className = "NOVIDIV1 show";
    } else {
        myID.className = "NOVIDIV1 hide";
    }
};
window.addEventListener("scroll", myScrollFunc);

/*TRANZICIJA ZA UVODNI TEKST*/

TEKST2 = document.getElementById("TEKST2");

var myScrollFunc1 = function () {
    var y = window.scrollY;
    if (y >= 300) {
        TEKST2.className = "TEKST2 show";
    } else {
        TEKST2.className = "TEKST2 hide";
    } 
};
window.addEventListener("scroll", myScrollFunc1);


/*FUNKCIJA ZA SLIKE*/
function changeImage(x) {
    //let velikaslika = document.getElementById("velikaslika");
    //velikaslika.src = "IMAGES/image" + x + ".png";
    document.getElementById('leviFLOAT').style.backgroundImage = "url('images/image" + x + ".png')";
    
}




var myScrollFunc4 = function () {
    var y = window.scrollY;
    if (y >= 1250) {
        showtext.className = "showtext show";
    } else {
        showtext.className = "showtext hide";
    }
};
window.addEventListener("scroll", myScrollFunc4);

var myScrollFunc5 = function () {
    var y = window.scrollY;
    if (y >= 1200) {
        newtext.className = "newtext show";
    } else {
        newtext.className = "newtext hide";
    }
};
window.addEventListener("scroll", myScrollFunc5);

var myScrollFunc6 = function () {
    var y = window.scrollY;
    if (y >= 2150) {
        slike.className = "slike show";
    } else {
        slike.className = "slike hide";
    }
};
window.addEventListener("scroll", myScrollFunc6);


/*FUNKCIJA ZA TEKST OPIS SLIKA ZA EXPIRIANCE*/

var myScrollFunc7 = function () {
    var y = window.scrollY;
    if (y >= 2300) {
        opisSLIKA.className = "opisSLIKA show";
    } else {
        opisSLIKA.className = "opisSLIKA hide";
    }
};
window.addEventListener("scroll", myScrollFunc7);






/* TRANZICIJA ZA SLIKU PROJEKTA*/
var myScrollFunc11 = function () {
    var y = window.scrollY;
    if (y >= 3000) {
        leviFLOAT.className = "leviFLOAT show";
    } else {
        leviFLOAT.className = "leviFLOAT hide";
    }
};
window.addEventListener("scroll", myScrollFunc11);




/*TRANZICIJA ZA MENI PROJEKTA*/
var myScrollFunc3 = function () {
    var y = window.scrollY;
    if (y >= 3100) {
        dropdowncontent.className = "dropdowncontent show";
    } else {
        dropdowncontent.className = "dropdowncontent hide";
    }
};
window.addEventListener("scroll", myScrollFunc3);



/* SCROLL FUNCTION SMOOTH MENU */

$('#aboutdugme').click(function () {
    $('html, body').animate({
        scrollTop: $("#naslovtext").offset().top
    }, 2000);
});


/**//*FUNKCIJA ZA CONTACT APPEAR*/

//var myScrollFunc12 = function () {
//    var y = window.scrollY;
//    if (y >= 6000) {
//        contact.className = "contact show";
//    } else {
//        contact.className = "contact hide";
//    }
//};
//window.addEventListener("scroll", myScrollFunc12);