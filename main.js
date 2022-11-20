const hamburgeropen = document.querySelector('.open');
const hamburgerclose = document.querySelector('.close');
const mobilemenu = document.querySelector('#mobmenu')
hamburgeropen.addEventListener('click',()=>{
    hamburgeropen.classList.toggle('toggle');
    hamburgerclose.classList.toggle('close');
    mobilemenu.classList.toggle('display-mobile');
})
hamburgerclose.addEventListener('click',()=>{
    hamburgeropen.classList.toggle('toggle');
    hamburgerclose.classList.toggle('close');
    mobilemenu.classList.toggle('display-mobile');
})