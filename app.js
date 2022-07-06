const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-container');
const contactBtn = document.querySelectorAll('.contact-btn');
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

    contactBtn.addEventListener('click', function(){
        sections[4].className += ' active';
    })
    // sections activation
    // allSections.addEventListener('click', (e) => {
    //     const id = e.target.dataset.id;
    //     if(id){
    //         // remove selected from the other btns
    //         sectBtns.forEach((btn) => {
    //             btn.classList.remove('active')
    //         })
    //         e.target.classList.add('active')
    //         //hiding other sections when one is active
    //         sections.forEach((section) => {
    //             section.classList.remove('active')
    //         })

    //         const element = document.getElementById(id);
    //         element.classList.add('active');
    //     }
    // })
}

PageTransition();