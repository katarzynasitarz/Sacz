function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar-content") {
        x.className += " responsive";
    } else {
        x.className = "navbar-content";
    }
}

$(".menu").click(function(){
    $(".navbar-content").removeClass("responsive");
});/**
 * Created by Wundawaffę on 2018-06-20.
 */
