const gnbToHome = document.querySelector('#home');
const gnbToAbout = document.querySelector('#About');
const gnbToPage4 = document.querySelector('#section4');
const gnbToPage5 = document.querySelector('#section5');
const gnbToPage6 = document.querySelector('#section6');
const gnbToPage7 = document.querySelector('#section7');
const gnbToPage8 = document.querySelector('#section8');

const indexToPage4 = document.querySelector('#INDEX-section4');
const indexToPage5 = document.querySelector('#INDEX-section5');
const indexToPage6 = document.querySelector('#INDEX-section6');
const indexToPage7 = document.querySelector('#INDEX-section7');
const indexToPage8 = document.querySelector('#INDEX-section8');

gnbToHome.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-1').scrollIntoView(true);
});

gnbToAbout.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-2').scrollIntoView(true);
});

gnbToPage4.addEventListener("click", (e)=> {
    e.preventDefault();
    let target = document.querySelector('#section-4');
    console.log(target);
});
gnbToPage5.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-5').scrollIntoView(true);
});
gnbToPage6.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-6').scrollIntoView(true);
});
gnbToPage7.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-7').scrollIntoView(true);
});
gnbToPage8.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-8').scrollIntoView(true);
});


indexToPage4.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-4').scrollIntoView(true);
});
indexToPage5.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-5').scrollIntoView(true);
});
indexToPage6.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-6').scrollIntoView(true);
});
indexToPage7.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-7').scrollIntoView(true);
});
indexToPage8.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-8').scrollIntoView(true);
});
