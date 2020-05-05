document.addEventListener('DOMContentLoaded', () => {
  
  let btns = document.querySelectorAll("[name=color]");
  for (let button of Array.from(btns)) {
    button.addEventListener('change', ()=> {
      document.body.style.background=button.value;
    });
  };
})
