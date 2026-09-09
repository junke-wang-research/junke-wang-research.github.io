document.documentElement.classList.add('js');
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const utility=document.querySelector('.utility');
if(utility) utility.remove();
const brandSub=document.querySelector('.brand-text span');
if(brandSub) brandSub.textContent='Thermal systems · controls · optimization · experiments';
document.querySelectorAll('.site-footer .small').forEach(el=>{
  const disclaimer='The opinions or statements expressed herein should not be taken as a position of or endorsement by the University of Oklahoma.';
  if(el.textContent.trim()===disclaimer) el.textContent='ESIL is an independently maintained research-group website led by Junke Wang. '+disclaimer;
});
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#primary-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});}
