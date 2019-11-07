var getId=document.getElementById("mytext");
var getSize=document.getElementById("size");
var getfontfam=document.getElementById("fontfam");

function makeBold() {    
if (getId.style.fontWeight=="bold"){

    getId.style.fontWeight="normal";
}
getId.style.fontWeight="bold";
}


function makeItalic() {   
if (getId.style.fontStyle=="Italic"){

    getId.style.fontStyle="normal";
}
getId.style.fontStyle="Italic";
}
function makeUnderline() {   
if (getId.style.textDecoration=="underline"){

    getId.style.textDecoration="";
}
getId.style.textDecoration="underline";
}

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
        $("cinqc").toggle();
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

    $(".buttonstyle").click(function(){
        $(this).hide ("slow", function() { alert("This is GoMyCode Track. Each track has its own goal. By adopting this track, you chose your own goal")});
    });
     
 

