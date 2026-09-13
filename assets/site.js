document.documentElement.classList.add('js');

// Load the shared refinement stylesheet on every page so all tabs use the same layout.
if(!document.querySelector('link[href$="refinements.css"]')){
  const link=document.createElement('link');
  link.rel='stylesheet';
  link.href='assets/refinements.css';
  document.head.appendChild(link);
}

document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
const utility=document.querySelector('.utility');
if(utility) utility.remove();
const brandSub=document.querySelector('.brand-text span');
if(brandSub) brandSub.textContent='Thermal systems · controls · optimization · experiments';

// Keep recruiting language consistent across all public pages, including older cached markup.
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const textNodes=[];
while(walker.nextNode()) textNodes.push(walker.currentNode);
textNodes.forEach(node=>{
  if(node.parentElement && ['SCRIPT','STYLE'].includes(node.parentElement.tagName)) return;
  node.nodeValue=node.nodeValue
    .replace(/Spring\/Fall 2027/g,'year-round in 2027')
    .replace(/Spring and Fall 2027/g,'year-round in 2027');
});

// Present broad program-level directions on the Research page without exposing unsubmitted proposal details.
const currentDirectionsHeading=[...document.querySelectorAll('h2')].find(h=>h.textContent.trim()==='Current directions');
if(currentDirectionsHeading){
  const section=currentDirectionsHeading.closest('section');
  const intro=section?.querySelector('.section-heading p');
  if(intro) intro.textContent='ESIL is building depth in broad, connected themes that link physical energy systems, intelligent decision-making, flexibility, resilience, and experimental evidence.';
  const grid=section?.querySelector('.grid');
  if(grid){
    grid.innerHTML=`
      <article class="card"><h3>Adaptive thermal energy systems</h3><p>Models, sensing, and control methods that help HVAC, heat-pump, storage, and coupled thermal systems adapt to changing weather, loads, equipment conditions, and operating objectives.</p></article>
      <article class="card"><h3>Safe, resilient &amp; autonomous control</h3><p>Predictive, learning, and fault-tolerant strategies that operate under uncertainty while respecting comfort, equipment, reliability, and safety constraints.</p></article>
      <article class="card"><h3>Energy flexibility &amp; building-grid integration</h3><p>Coordination of buildings, thermal storage, controllable loads, and distributed energy resources to provide flexible operation across multiple timescales.</p></article>
      <article class="card"><h3>Experimentally grounded energy-system intelligence</h3><p>Controlled experiments, high-resolution sensing, integrated testbeds, and field data that reveal system behavior, validate algorithms, and accelerate learning from real energy systems.</p></article>`;
  }
}

document.querySelectorAll('.site-footer a').forEach(link=>{
  if(link.textContent.trim()==='OU Aerospace & Mechanical Engineering'){
    link.href='https://ou.edu/coe/ame/people/faculty/junke-wang';
    link.textContent='Junke Wang · OU Faculty Profile';
  }
});

document.querySelectorAll('.site-footer .small').forEach(el=>{
  const disclaimer='The opinions or statements expressed herein should not be taken as a position of or endorsement by the University of Oklahoma.';
  if(el.textContent.trim()===disclaimer) el.textContent='ESIL is an independently maintained research-group website led by Junke Wang. '+disclaimer;
});
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#primary-nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');toggle.setAttribute('aria-expanded',String(open));toggle.textContent=open?'Close':'Menu';});}
