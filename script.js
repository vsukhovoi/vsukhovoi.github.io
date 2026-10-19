document.getElementById('year').textContent=new Date().getFullYear();
if('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
 const io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.style.animation='rise .7s cubic-bezier(.2,.7,.2,1) forwards';io.unobserve(e.target);}})},{threshold:.12});
 document.querySelectorAll('section .sec-title, .card, .proj, .chip, .contact-box').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(22px)';io.observe(el)});
}
