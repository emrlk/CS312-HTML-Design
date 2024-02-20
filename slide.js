//References: "Dynamic Web Programming and HTML5"
var pic = ["images/seal1.jpg", "images/seal2.jpg","images/seal3.jpg",];
var slide = new Array();
var index = 0;

function loadImage(url){
    if(document.images){
        rslt = new Image();
        rslt.src = url; return rslt;
    }
}

//preloading all images
if(document.images)
    for(var i in pic){
        slide.push(loadImage(pic[i]));
    }

function changeSlide(){
    document.getElementById('display').src = slide[index].src;
}

function prevSlide(){
    if(--index < 0) {index = pic.length-1;}
    changeSlide();
}

function nextSlide(){
    if(++index >= pic.length) {index = 0;}
    changeSlide();
}