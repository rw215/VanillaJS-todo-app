// To-Do IIFE
(() => {
  const list = document.querySelector('#list');
  const form = document.querySelector('form');
  const item = document.querySelector('#item');

  // Form Submit
  form.addEventListener('submit', e => {
    e.preventDefault();
    list.innerHTML += `<li>${item.value}</li>`;
    store();
    item.value = "";
  }, false);

  // List Click
  list.addEventListener('click', e => {
    const t = e.target;
    if (t.classList.contains('checked')) {
      t.parentNode.removeChild(t);
    } else {
      t.classList.add('checked');
    }
    store();
  }, false)

  // LocalStorage R/W
  const store = () => {
    window.localStorage.myitems = list.innerHTML
  }
  const getValues = () => {
    list.innerHTML = (window.localStorage.myitems) ? window.localStorage.myitems : ''
  }

  // Pull from LocalStorage on Load.
  getValues();
})();