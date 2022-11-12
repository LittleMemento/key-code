const insert = document.getElementById("insert");

window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
     <div class="key">
       <h1>
        ${e.key == ' ' ? 'Space' : e.key}
       </h1>
       <small>event.key</small>
     </div>
     <div class="key">
       <h1>
        ${e.keyCode}
       </h1>
       <small>event.keyCode</small>
     </div>
     <div class="key">
       <h1>
        ${e.code}
       </h1>
       <small>event.code</small>
     </div>
    `;
});
