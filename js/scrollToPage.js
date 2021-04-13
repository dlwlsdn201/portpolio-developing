const goToSection4 = document.querySelector('#section4');
const goToSection5 = document.querySelector('#section5');
const goToSection6 = document.querySelector('#section6');
const goToSection7 = document.querySelector('#section7');
const goToSection8 = document.querySelector('#section8');

goToSection4.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-4').scrollIntoView(true);
});
goToSection5.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-5').scrollIntoView(true);
});
goToSection6.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-6').scrollIntoView(true);
});
goToSection7.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-7').scrollIntoView(true);
});
goToSection8.addEventListener("click", (e)=> {
    e.preventDefault();
    document.querySelector('#section-8').scrollIntoView(true);
});
