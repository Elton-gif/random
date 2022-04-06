const sidemenu = document.querySelector('#aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('#theme-toggler')


menuBtn.addEventListener('click',(e)=>{
    sidemenu.style.display ='block'
})

closeBtn.addEventListener('click',()=>{
    sidemenu.style.display ='none'
    
})
//
themeToggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-varibales');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');

    
})