console.log('Thanks for checking out my profile site!');
console.log(' If you have any ideas for improvement please send them my way.');

const upArrowSrc = './icons/up.png';
const downArrowSrc = './icons/down.png';


const top1 = document.querySelector('.header');
const top2 = document.getElementById('fake_object2');

const openCloseButton = document.getElementById('close_header');
const openCloseButtonIcon = document.getElementById('buttonIcon');

const content1 = document.getElementById('home_anchor');
const content2 = document.getElementById('name');
const content3 = document.getElementById('fake_object1');

function close_header() {
    console.log('activated');
    
}

let openStatus = true;

openCloseButtonIcon.onclick = () => { 
    
    if (openStatus) {
        /*content1.style.display = 'none';
        content2.style.display = 'none';
        content3.style.display = 'none';*/
        
        top1.style.height = '0px';
        top2.style.height = '39px';
        openCloseButtonIcon.style.rotate = '180deg';

        openStatus = false;
    } else {
        top1.style.height = '190px';
        top2.style.height = '239px';
        openCloseButtonIcon.style.rotate = 'none';
        
        content1.style.display = 'block';
        content2.style.display = 'block';
        content3.style.display = 'block';

        openStatus = true;
    }
    
} 
