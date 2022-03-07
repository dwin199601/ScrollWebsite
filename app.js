const menu = document.querySelector('#mobile');
const menuLinks = document.querySelector(".navbar_menue");
const nav = document.querySelector("#nabar_logo");

// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menue when scrolling
const highlightMenu = () => {
    const highlight = document.querySelector('.highlight')
    const home = document.getElementById("home-page");
    const contact = document.getElementById("contact-page");
    const experiance = document.getElementById("experiance-page");
    const education = document.getElementById("education-page");
    let scrollPosition = window.scrollY;

    //add highlight class to menue items
    //console.log(scrollPosition)
    if(window.innerWidth > 960 && scrollPosition < 1620) {
        home.classList.add('highlight');
        contact.classList.remove('highlight')
        experiance.classList.remove('highlight')
        education.classList.remove('highlight');
        return
    }

    else if(window.innerWidth > 960 && scrollPosition < 2799){
        experiance.classList.add('highlight');
        home.classList.remove('highlight');
        education.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPosition < 3574){
        education.classList.add('highlight');
        contact.classList.remove('highlight');
        experiance.classList.remove('highlight');
        return;
    }

    else if(window.innerWidth > 960 && scrollPosition < 4266){
        contact.classList.add('highlight');
        education.classList.remove('highlight');
        return;
    }

    


    if(highlight && window.innerWidth < 960 && scrollPosition < 500 || highlight){
        highlight.classList.remove('highlight')
    }
}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking mobile menu

const hideMobMenu = () => {
    const menu_bar = document.querySelector('.is-active') // is-active - in style.css
    if(window.innerWidth <= 700 && menu_bar) {
        menu.classList.toggle('is-active');
        menuLinks.classList.toggle('active');
    }
}

menuLinks.addEventListener('click', hideMobMenu);
nav.addEventListener('click', hideMobMenu);

//SLIDER

let i=0;
let images = [];
let timer = 3000;

//image list
images [0] = "/diplomas/diploma11.png";
images [1] = "/diplomas/masterdiploma11.png";
images [2] = "/diplomas/certificateqa11.png";

//change image

const changeImg = () => {
    document.slide.src= images[i];

    if(i<images.length - 1){
        i++;
    }
    else 
    {
        i=0;
    }

    setTimeout("changeImg()", timer)
}

window.onload = changeImg;



//videos

const btn = document.querySelector('#playButton');
const btn_2 = document.querySelector('#playButton_2');
const btn_3 = document.querySelector('#playButton_3');


const videoContainer = document.querySelector('.video-container');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
    document.querySelector('.videoPlayer').src='https://www.youtube.com/embed/WB8BuhWMer8';
    videoContainer.classList.add('show');
})

btn_2.addEventListener('click', () => {
    document.querySelector('.videoPlayer').src='https://www.youtube.com/embed/n4qESC-4r9M';
    videoContainer.classList.add('show');
})

btn_3.addEventListener('click', () => {
    document.querySelector('.videoPlayer').src='https://www.youtube.com/embed/EOZS0P1JIt4';
    videoContainer.classList.add('show');
})

closeBtn.addEventListener('click', ()=> {
    document.querySelector('.videoPlayer').src="";
    videoContainer.classList.remove('show');
})

//skill_box

const skill_btn = document.querySelector('#skill_btn');
const other_skills_box = document.querySelector('.other_skill_box');
const close_skill_btn = document.querySelector('.close_skill');


skill_btn.addEventListener('click', () => {
    other_skills_box.style["display"] = "block";
    document.querySelector('#skill_btn').disabled = true;
   }
);

close_skill_btn.addEventListener('click', () => {
    other_skills_box.style["display"] = "none";
    document.querySelector('#skill_btn').disabled = false;

});



