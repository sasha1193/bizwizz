const leftArrow = document.querySelector('.left-arrow');

const rightArrow = document.querySelector('.right-arrow');

const slider = document.querySelector('.carousel__slider');


let cardIndex;
let slidenum;


rightArrow.addEventListener('click', function() {
    cardIndex=document.querySelector('input[name="slide"]:checked').value;
    if(cardIndex < 3) {
        cardIndex++;
    }
    else{
        cardIndex = 1;
    }
    console.log(cardIndex);
    slidenum ='slide'+ cardIndex;
    document.getElementById(slidenum).checked = true;
});

leftArrow.addEventListener('click', function() {
    cardIndex=document.querySelector('input[name="slide"]:checked').value;
    if(cardIndex > 1) {
        cardIndex--;
    }
    else{
        cardIndex=3;
    }
    console.log(cardIndex);

    slidenum ='slide'+ cardIndex;
    document.getElementById(slidenum).checked = true;
})