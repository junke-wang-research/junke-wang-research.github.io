document.documentElement.classList.add('js');
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#primary-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});}
