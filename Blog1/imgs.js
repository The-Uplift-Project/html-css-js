const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide div');

//Buttons
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

//Button listners

nextBtn.addEventListener('click' ,()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click' ,()=>{
    if(counter <= 0) return;
    carouselSlide.style.transition = "transform 0.3s ease-in-out";
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', ()=>{
    if(carouselImages[counter].id ==='lastclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(carouselImages[counter].id ==='firstclone'){
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    
})






//To pop up the message about subscription

var validatefunction  = function validate() {

    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var email = document.getElementById("mail").value;
    if (reg.test(email) == false) 
    {
        alert('Invalid Email Address');
        return (false);
    } else {
        alert('You have subscribed !!');
        return(true);
    }
};
document.getElementById("sbutton").addEventListener("click", validatefunction);

