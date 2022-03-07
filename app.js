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
images [0] = "https://lh3.googleusercontent.com/9UpzGl5R-9YlJ7hlc6vGwaRwAlZvjxRTnPQi-aOXS2kZlKupuJwjHQDKP8CtdeS1BmPsRU9aIIXwb3ouGbAtJk78x6K5JkjFehK2Cj6O1rBBlFVZr-ZxdE0zPFv5JKGzR_pq8EVNtXN4hkZoaRm4xpifgOg7MB5ScrivX4N2i7oMp7N-8Cy-HttFFKdvl21FGh6mdBgmiplfnYlJprZhsQpq1M-3BT7F4RY5EjETHgB0mhXL91wugODLoY_2IE-w2dW26BHuo-tDkSe-zZ_vh_xZP6Glt7tor4QKJUY2oVgado-1ebUn9WI7bdLP3FwJQQYjqYxrKn4YdaOrjuKhzBS5wfNONRKJ9_ieaQzk3rQQDONC7zBexn2SJcue8U7bZa1uqA7Zg8mqEoswgMdwS_b-E851l-QCti0z7NaXl0deFBpexb5-yaXrMXKK3nNR1-gqjYRaibGs1vm3BcpRYkTyNcICEHYGm4TDmqcgG7NWDmAr_EBVAzgzVA2aZiJSh-aXiuptibzm-EWgbM4GsLz9rABOhSvgqUF7_S8ZydDC_q93JBFDKbdPCPE77JkUGxRJAb1sykRwSDUYn9JDYoaXbUC4nPiwizeS72cZkZMuXqNMNXg1ZaRXQaDLUQqcpp8WC4O0HUa84tNBcWYNCdNPP-8fbC6dJ5415p3UHQ3qKBVl4x19NEqQ9yth3oGDXLS613pzVPWM8RRpKJR9xB77=w1280-h902-no?authuser=0";
images [1] = "https://lh3.googleusercontent.com/6AsPi74O2FFXbjgjr53KHxk9X4RNYZihmK8CMvQ1Sf1Kqsp6OK0DzvhLfhlCTXDU73dNd80mSya-4G7yCAV3qzBdtZrVckiyCxJhTCjW6glLPSHfiAnhxLEVjqyivDRqoyWieyuAk4Nz-jyyvdoYMmFTUoOB7_QyrTMwL6ukBNzPi1CAcf5_igCMNhqCkZZU1-j5TbuWgtPzPBwYch5ZPEAlwlBc5gx_5X_jXtlKf3j-u-FedEl1KyTcieZ2m_5sWG7wJc00pdiFw3oKK5WtP5-2g4ISU09ZcAJxt_dZ4qbVhpU9emKQQ2acSda7sJncrutTfSuEI6JRfX_5wU2Ss2pJyXDlsnmbwceBt731u9ZKtS0e7Fd7HMvOkuXzrWscg_db2G7ffw-Qzkidbx5MW1-PE_ig9czS8iKPXnIuJ305UwaB3G5Eb8Vn50Mjc-rtbRYuzUYiq4ECIfHwqIOo_JyvltFq0X3RpMFVT43TcdsYoHS0YYFkRJkLpS2ZXK3jtSWOfqplKVf3TKRE8rVJ411gJU1Wq6aVSJ0_0f31dpHUGBgWWlYJPIjc9-a82I0Sdm8X8VeUH4bnEI0FOxRGrsMh1o0M8-3R_i9Tvv-Bx2c4GgOUcpcLVmXIbICJzznR4X__4HouiqK2GJPk_GdC1_tRBROlaxJ6q0ddHj0aYGdoWueJh1Bq2trO0Hb9-AiZvCouyG-_DzdFJvoimkMHi-MK=w1280-h899-no?authuser=0";
images [2] = "https://lh3.googleusercontent.com/BAOyST3iHWO2swposJckp6vddyiaGZWqrW27a8qmmloaRttonbKGH6R_ZyFS28O__-Ld-zIjO8KrExpmsW74bGwjFROeHY-EtNH9FcCjWeMlmPf8tQFcO6VRJxcOPenIqmS8pOL_9r1jEDp7ZtwRRDYEsvHJbfO9jD1VqoSLrFlL3XWFmZ_PtZUeV-liCa_LVYveAK-kFDWL-1Dx3RX1Itsrf7CdArwQ7owSlc3UcFMckl0mqkV_wV_YqkwFiiyrIFc_-NFtMzbDpRS413hDkCPjXKfsfvLrjDh-MAEdxame1FnVBkYym-BTYCmbTUry23rmauYj90AMlImlA2abofVv8qWFCxyGrY5z8Fr8J3FfxByJTnD-Drsaad65lNyseFWTjVIs9_VtXrHIvYXjwOTj6A9oSkjR1lCFxVizl99koKx6tt0vab4D7qodTD405ZhLX1lwQpBA-X4iNrnIcADQPViqEdRCUYvz2rre0f-lTJevNGdq3D0U5llzu_Sma1mzai6tYQJgQu6T4BPW6xgQ8V2eRhYF2ZVrtRw4srQNkKQPZkOSN2-NRbVzGUhkYO7AITXvffLX6zHUPeU1OssxvFcY5obn6YlcyaAbliwBvKs9vxrN0GmUe8OEZmYrxyX3HxI4Q4gRdi8lHX04uqoKzGI051qRQRapZzu3BoQoY-bd3N-mWUswCC97ozQNdxeIi13R9rKWzG47gSoB-Oak=w957-h648-no?authuser=0";

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



