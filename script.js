(function(){
 const root=document.documentElement;
 const saved=localStorage.getItem('theme');
 const preferred=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';
 root.dataset.theme=saved||preferred;
 function updateThemeButton(){const b=document.querySelector('[data-theme-toggle]');if(!b)return;const dark=root.dataset.theme==='dark';b.setAttribute('aria-label',dark?'Switch to light mode':'Switch to dark mode');b.setAttribute('title',dark?'Light mode':'Dark mode');b.innerHTML=dark?'☀':'☾';}
 updateThemeButton();
 document.addEventListener('click',e=>{
   const toggle=e.target.closest('[data-theme-toggle]');
   if(toggle){root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';localStorage.setItem('theme',root.dataset.theme);updateThemeButton();}
   const menu=e.target.closest('[data-menu-toggle]'); if(menu){document.querySelector('.mobile-nav')?.classList.toggle('open');menu.setAttribute('aria-expanded',document.querySelector('.mobile-nav')?.classList.contains('open'));}
   if(e.target.closest('.mobile-nav a')) document.querySelector('.mobile-nav')?.classList.remove('open');
 });
 const header=document.querySelector('.site-header');
 window.addEventListener('scroll',()=>{header?.classList.toggle('scrolled',scrollY>12);const p=document.querySelector('.progress');if(p){const max=document.documentElement.scrollHeight-innerHeight;p.style.width=max>0?(scrollY/max*100)+'%':'0%';}}, {passive:true});
 const io=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting){x.target.classList.add('visible');io.unobserve(x.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
 document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
})();
