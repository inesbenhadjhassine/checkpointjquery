var getId=document.getElementById("mytext");
var getSize=document.getElementById("size");
var getfontfam=document.getElementById("fontfam");

function makeBold() {    
if (getId.style.fontWeight=="bold"){

    getId.style.fontWeight="normal";
}
    else {
getId.style.fontWeight="bold";
}}


function makeItalic() {   
if (getId.style.fontStyle=="italic"){

    getId.style.fontStyle="normal";
}
    else{
getId.style.fontStyle="italic";
}}
function makeUnderline() {   
if (getId.style.textDecoration=="underline"){

    getId.style.textDecoration="";
}
    else {
getId.style.textDecoration="underline";
}}

function changeSize() {
    getId.style.fontSize=getSize.value;
}
function changefontfam() {
    getId.style.fontFamily=getfontfam.value;
}



$(document).ready(function(){
    $(".buttonstyle").hide();
});

  $(".cours1").mouseenter(function(){
        $("#unc").toggle();
    }); 
    $(".cours2").mouseenter(function(){
        $("#deuxc").toggle();
    }); 
    $(".cours3").mouseenter(function(){
        $("#troisc").toggle();
    }); 
    $(".cours4").mouseenter(function(){
        $("#quatrec").toggle();
    });  
    $(".cours5").mouseenter(function(){
        $("#cinqc").toggle();
    }); 
    $(".cours6").mouseenter(function(){
        $("#sixc").toggle();
    });  
    $(".cours7").mouseenter(function(){
        $("#septc").toggle();
    });
    $(".cours8").mouseenter(function(){
        $("#huitc").toggle();
    });
    $(".cours9").mouseenter(function(){
        $("#neufc").toggle();
    });
