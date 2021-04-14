const gnbToHome = document.querySelector('.home');
const gnbToAbout = document.querySelector('.about');
const gnbToPorpolio = document.querySelector('.portpolio');
const gnbToPage4 = document.querySelector('#section4');
const gnbToPage5 = document.querySelector('#section5');
const gnbToPage6 = document.querySelector('#section6');
const gnbToPage7 = document.querySelector('#section7');
const gnbToPage8 = document.querySelector('#section8');

const indexToPage4 = document.querySelector('#SECTION4');
const indexToPage5 = document.querySelector('#SECTION5');
const indexToPage6 = document.querySelector('#SECTION6');
const indexToPage7 = document.querySelector('#SECTION7');
const indexToPage8 = document.querySelector('#SECTION8');

const indexChildAll = document.querySelectorAll('.stopEvent');

const section1 = document.querySelector('#section-1');
const section2 = document.querySelector('#section-2');
const section2_1 = document.querySelector('#section-2-1');
const section3 = document.querySelector('#section-3');
// const section3_1 = document.querySelector('#section-3-1');
const section4 = document.querySelector('#section-4');
const section5 = document.querySelector('#section-5');
const section6 = document.querySelector('#section-6');
const section7 = document.querySelector('#section-7');
const section8 = document.querySelector('#section-8');

updateState = (e) => {
    const allSections = [
        section1, 
        section2,
        section2_1,
        section3,
        section4,
        section5,
        section6,
        section7,
        section8,  
    ];

    let targetID = e.target.id !== '' ? e.target.id : e.currentTarget.parentNode.id;
    console.log(targetID);
    let sectionID = targetID.slice(-1);
    const target = document.querySelector(`#section-${sectionID}`);
    
    // console.log('allSection:',allSections);

    for(let i = 0; i < allSections.length; i++) {
        if(allSections[i] === target)  {
            allSections.splice(i, 1);
            i--;
        }
    };
    // console.log('deleted element:', allSections);
    // console.log(target.id.slice(8,9));
    let prevSections = allSections.filter(section=> section.id.slice(8,9) < target.id.slice(8,9));
    let queueSections = allSections.filter(section=> section.id.slice(8,9) >= target.id.slice(8,9));
    target.classList.remove("prev");
    target.classList.remove("queue");
    target.classList.add("active");
    
    // console.log("prev:",prevSections);
    // console.log("queue:",queueSections);
    
    prevSections.map(section=> section.classList.add("prev"));
    prevSections.map(section=> section.classList.remove("queue","active"));
    queueSections.map(section=> section.classList.add("queue"));
    queueSections.map(section=> section.classList.remove("prev", "active"));
    
}


gnbToHome.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});

gnbToAbout.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});

gnbToPorpolio.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});

gnbToPage4.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});
gnbToPage5.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});
gnbToPage6.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});
gnbToPage7.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});
gnbToPage8.addEventListener("click", (e)=> {
    e.preventDefault();
    updateState((e));
});


$('.index').on('click', function(e) {
    e.stopPropagation();
    updateState((e));
});


