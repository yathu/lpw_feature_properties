$(document).ready(function(){const e=document.querySelector(".page-header"),t=document.querySelector(".mobile-nav-container"),n=t.querySelector(".toggle-menu"),l=e.querySelector(".menu-wrapper");var o=e.querySelectorAll(".level-1 > li > a");const s=e.querySelector(".list-wrapper:nth-child(2)"),c=e.querySelector(".list-wrapper:nth-child(3)"),i=s.querySelector(".sub-menu-wrapper"),r=c.querySelector(".sub-menu-wrapper");var a=e.querySelectorAll(".back-one-level");const u="is-visible",d="is-active";$(".close-mobile-nav").on("click",function(){$(".toggle-menu").trigger("click")}),n.addEventListener("click",function(){if(l.classList.toggle(u),console.log(this.classList),!this.classList.contains(u)){console.log("yes"),s.classList.remove(u),c.classList.remove(u);for(const e of l.querySelectorAll("a"))e.classList.remove(d)}});for(const v of o)v.addEventListener("click",function(e){const t=v.nextElementSibling;t&&(e.preventDefault(),this.classList.add(d),e=t.cloneNode(!0),i.innerHTML="",i.append(e),s.classList.add(u))});s.addEventListener("click",function(e){const t=e.target;if("a"===t.tagName.toLowerCase()&&t.nextElementSibling){const n=t.nextElementSibling;e.preventDefault(),t.classList.add(d);e=n.cloneNode(!0);r.innerHTML="",r.append(e),c.classList.add(u)}});for(const m of a)m.addEventListener("click",function(){const e=this.closest(".list-wrapper");e.classList.remove(u),e.previousElementSibling.querySelector(".is-active").classList.remove(d)});$(".main-nav > li > .dropdown-toggle").click(function(){window.location=$(this).attr("href")})});