!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".fixed-action-btn");M.FloatingActionButton.init(e,{direction:"left",hoverEnabled:!1})}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelectorAll(".tooltipped");M.Tooltip.init(e)});var n,r,o,a,l=document.getElementById("textarea"),i=document.getElementById("boxtitle"),d=document.getElementById("boxcontent"),c=(document.querySelector("form"),document.querySelectorAll(".typeselector")),s=Array.prototype.slice.call(c),p=document.getElementById("closeediting"),u=document.getElementById("message"),f=document.getElementById("addbtn"),g=document.getElementById("editbtn"),m=document.getElementById("workpanel"),y=document.getElementById("financepanel"),h=document.getElementById("personalpanel"),N=document.getElementById("otherpanel"),v=[],E=[],S=[],b=[],L=document.getElementById("editWork"),k=document.getElementById("editFinance"),B=document.getElementById("editPersonal"),x=document.getElementById("editOther");function I(e,t){e.innerHTML+='\n        <li class="collection-item"><p class="noteValue">'.concat(t,"</p> </li>\n    ")}function O(){i.style.display="none",d.style.display="none"}function C(e,t){e.innerHTML+='\n    <div class="noteButtons">\n        <a class="btn-floating white btn-small"><i class="material-icons '.concat(t,'-text editNoteBtn">border_color</i></a>\n        <a class="btn-floating white btn-small"><i class="material-icons ').concat(t,'-text deleteNoteBtn">delete</i></a>\n    </div>\n    ')}function T(){p.style.display="block"}function w(e,t){var n=JSON.parse(localStorage.getItem(e));n.forEach(function(r){if(t===r){n.splice(n.indexOf(r),1);var o=JSON.stringify(n);localStorage.setItem(e,o)}})}function A(e){f.style.display="none",g.style.display="block",l.focus(),l.value=e,O()}l.addEventListener("focus",function(){i.style.display="block",d.style.display="block"}),f.addEventListener("click",function(e){var t,n,r=void 0;if(s.forEach(function(e){e.checked&&(r=e.id)}),""!==l.value&&null!=r){switch(r){case"work":o=m,v.push(l.value),t="workStorage",n=v;break;case"finances":o=y,E.push(l.value),t="financeStorage",n=E;break;case"personal":o=h,S.push(l.value),t="personalStorage",n=S;break;case"other":o=N,b.push(l.value),t="otherStorage",n=b}I(o,l.value),function(e,t,n){var r=localStorage.getItem(e);if(null===r)localStorage.setItem(e,JSON.stringify(t));else if(null!==r){var o=JSON.parse(r);o.push(n),localStorage.setItem(e,JSON.stringify(o))}}(t,n,l.value),l.value="",M.toast({html:"Note added!",classes:"rounded",displayLength:"2000"})}else u.innerHTML='\n        <a class="btn red accent-2 white-text">Please enter note and select category.</a>\n    ',setTimeout(function(){u.innerHTML=""},1500);O(),e.preventDefault()}),window.addEventListener("DOMContentLoaded",function(){var e;["workStorage","financeStorage","personalStorage","otherStorage"].forEach(function(t){var n=localStorage.getItem(t);if(null!==n){var r=JSON.parse(n);r.forEach(function(n){switch(t){case"workStorage":e=m;break;case"financeStorage":e=y;break;case"personalStorage":e=h;break;case"otherStorage":e=N}I(e,n)})}})}),L.addEventListener("click",function(){for(var e=Array.prototype.slice.call(m.children),t=1;t<e.length;t++)e[t].children.length<2&&C(e[t],"teal");T()}),k.addEventListener("click",function(){for(var e=Array.prototype.slice.call(y.children),t=1;t<e.length;t++)e[t].children.length<2&&C(e[t],"purple");T()}),B.addEventListener("click",function(){for(var e=Array.prototype.slice.call(h.children),t=1;t<e.length;t++)e[t].children.length<2&&C(e[t],"red");T()}),x.addEventListener("click",function(){for(var e=Array.prototype.slice.call(N.children),t=1;t<e.length;t++)e[t].children.length<2&&C(e[t],"amber");T()}),m.addEventListener("click",function(e){if(e.target.classList.contains("editNoteBtn")&&(n=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText,a=e.target.parentNode.parentNode.parentNode.firstElementChild,r="workStorage",A(n)),e.target.classList.contains("deleteNoteBtn")){var t=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText;m.removeChild(e.target.parentNode.parentNode.parentNode),w("workStorage",t),M.toast({html:"Note deleted!",classes:"rounded",displayLength:"2000"})}}),y.addEventListener("click",function(e){if(e.target.classList.contains("editNoteBtn")&&(n=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText,a=e.target.parentNode.parentNode.parentNode.firstElementChild,r="financeStorage",A(n)),e.target.classList.contains("deleteNoteBtn")){var t=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText;y.removeChild(e.target.parentNode.parentNode.parentNode),w("financeStorage",t),M.toast({html:"Note deleted!",classes:"rounded",displayLength:"2000"})}}),h.addEventListener("click",function(e){if(e.target.classList.contains("editNoteBtn")&&(n=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText,a=e.target.parentNode.parentNode.parentNode.firstElementChild,r="personalStorage",A(n)),e.target.classList.contains("deleteNoteBtn")){var t=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText;h.removeChild(e.target.parentNode.parentNode.parentNode),w("personalStorage",t),M.toast({html:"Note deleted!",classes:"rounded",displayLength:"2000"})}}),N.addEventListener("click",function(e){if(e.target.classList.contains("editNoteBtn")&&(n=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText,a=e.target.parentNode.parentNode.parentNode.firstElementChild,r="otherStorage",A(n)),e.target.classList.contains("deleteNoteBtn")){var t=e.target.parentNode.parentNode.parentNode.firstElementChild.innerText;N.removeChild(e.target.parentNode.parentNode.parentNode),w("otherStorage",t),M.toast({html:"Note deleted!",classes:"rounded",displayLength:"2000"})}}),p.addEventListener("click",function(){for(var e=[Array.prototype.slice.call(m.children),Array.prototype.slice.call(y.children),Array.prototype.slice.call(h.children),Array.prototype.slice.call(N.children)],t=0;t<e.length;t++)for(var n=1;n<e[t].length;n++)void 0!==e[t][n].children[1]&&e[t][n].removeChild(e[t][n].children[1]);setTimeout(function(){p.style.display="none"},500)}),g.addEventListener("click",function(e){var t,o,i,d;t=r,o=n,i=l.value,(d=JSON.parse(localStorage.getItem(t))).forEach(function(e){if(o===e){d.splice(d.indexOf(e),1,i);var n=JSON.stringify(d);localStorage.setItem(t,n)}}),a.innerText=l.value,setTimeout(function(){f.style.display="block"},500),g.style.display="none",l.focus(),l.value="",M.toast({html:"Note edited!",classes:"rounded",displayLength:"2000"}),e.preventDefault()})}]);