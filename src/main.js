const menuButton=document.querySelector('.menu-button');
const menu=document.querySelector('#mobile-nav');
function closeMenu(restoreFocus=false){menu.hidden=true;menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','メニューを開く');if(restoreFocus)menuButton.focus();}
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'メニューを閉じる':'メニューを開く');});
menu.addEventListener('click',event=>{if(event.target.closest('a'))closeMenu();});
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!menu.hidden)closeMenu(true);});
document.addEventListener('click',event=>{if(!event.target.closest('.site-header'))closeMenu();});
matchMedia('(min-width:801px)').addEventListener('change',event=>{if(event.matches)closeMenu();});
const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
if('IntersectionObserver'in window&&!reduceMotion.matches){
 document.documentElement.classList.add('motion-ready');
 document.documentElement.classList.toggle('tab-hidden',document.hidden);
 const targets=[...document.querySelectorAll('.hero-title-block,.note-career,.closing-inner')];
 document.querySelector('.note-career').classList.add('float-once');document.querySelector('.closing-inner').classList.add('reveal-once');
 const observer=new IntersectionObserver(entries=>{for(const entry of entries){const target=entry.target;if(entry.isIntersecting&&!target.classList.contains('motion-done'))target.classList.add('is-playing');target.classList.toggle('motion-paused',!entry.isIntersecting);}},{threshold:.15});
 for(const target of targets){observer.observe(target);target.addEventListener('animationend',()=>{target.classList.add('motion-done');observer.unobserve(target);},{once:true});}
 document.addEventListener('visibilitychange',()=>document.documentElement.classList.toggle('tab-hidden',document.hidden));
 reduceMotion.addEventListener('change',event=>{if(event.matches){observer.disconnect();document.documentElement.classList.remove('motion-ready');}});
}
