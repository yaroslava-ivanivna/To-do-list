import{i as l}from"./assets/vendor-I1I71QQ2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const a=o=>`
  <li class="task-list-item">
    <p class="task-list-text">${o}</p>
    <label class="todo-item">
      <input type="checkbox" class="todo-checkbox">
      <span class="checkmark"></span>
    </label>
  </li>`,c=document.querySelector(".to-do-list-input"),u=document.querySelector(".task-list"),d=document.querySelector(".to-do-list-btn");d.addEventListener("click",function(){const o=c.value.trim();if(o===""){l.error({title:"Error",message:"Please enter a task!",position:"topRight"});return}console.log("Task added:",o),u.insertAdjacentHTML("beforeend",a(o)),c.value=""});
//# sourceMappingURL=index.js.map
