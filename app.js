const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-container');
const themeBtn = document.querySelector('.theme-btn');
const sectBtnMediaQuery = document.querySelectorAll('.navigation-item');
const menuIcon = document.querySelector('.menu-icon');

function PageTransition(){
    // button click activation. the function below determines the page that should be displayed on click.
    // sectBtn is representing all the classname of the icon buttons.
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
            // sections activation, hiding other sections when one is activated.
            let currentSectn = document.querySelectorAll('.active');
            currentSectn[0].className = currentSectn[0].className.replace('active', '');
            sections[i].className += ' active';
            
        })
    }

    // contactBtn.addEventListener('click', function(){
    //     sections[4].className += ' active';
    // })



   // toggle theme
    themeBtn.addEventListener('click', () => {
       let element = document.body;
       element.classList.toggle('light-mode');
    })


    
    // toggle display
    menuIcon.addEventListener('click', () => {
        let element = document.querySelector('.menu-icon');
        element.classList.toggle('display');
        let activated = document.querySelector('.side-bar');
        activated.classList.toggle('activated');
    })
    // media query control
    for(let i = 0; i < sectBtnMediaQuery.length; i++){
        sectBtnMediaQuery[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-section');
            currentBtn[0].className = currentBtn[0].className.replace('active-section', '');
            this.className += ' active-section';

            // sections activation, hiding other sections when one is activated.
            let currentSectn = document.querySelectorAll('.active');
            currentSectn[0].className = currentSectn[0].className.replace('active', '');
            sections[i].className += ' active';

            // return the display to default
            let element = document.querySelector('.menu-icon');
            element.classList.toggle('display');

            let activated = document.querySelector('.side-bar');
            activated.classList.toggle('activated');

            
        })
    }

}

PageTransition();