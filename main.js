/*===== MENU SHOW =====*/ 

const showMenu = () =>{
    const toggle = document.querySelector('.toggle');
    const nav = document.querySelector('.menu');
    const identifier = document.querySelectorAll('nav li')
     
    toggle.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active')
        

        identifier.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
               link.style.animation = `identifier 0.5s ease forwards ${index / 7 + 0.3 }s`;
            }
 
        });
    });

  
}
showMenu();





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
    
});

/*SCROLL HOME*/
sr.reveal('.name',{delay:200}); 
sr.reveal('.social',{
    delay: 400,
    origin:'left',
    distance:'200px'
}); 
sr.reveal('.black-line',{delay: 500}); 

/*SCROLL ABOUT*/
sr.reveal('.about-model',{
    delay: 500,
    origin:'bottom',
    distance:'200px'
}); 
sr.reveal('.about-text',{
    delay: 400,
    origin:'left',
    distance:'200px'
}); 

/*SCROLL PROJECTS*/
sr.reveal('.section-title',{
    delay: 200,
    origin:'left',
    distance:'200px'
});
sr.reveal('p',{
    delay: 200,
    origin:'left',
    distance:'200px'
});
sr.reveal('.s-box',{interval: 500});

/*SCROLL CONTACT*/
sr.reveal('.contact__form',{interval: 200});