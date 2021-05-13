var reason=["Lisa","Bart","Marge","Maggie","Homer",];
var image=["Lisa.png","Bart.png","Marge.png","Maggie.png","Homer.png",];
var i=0;
function nextslide(){ document.getElementById("reason").innerHTML= reason[i];
document.getElementById("image"). src= image[i];
i++;
if(i == 5){
    i = 0;
    }
}