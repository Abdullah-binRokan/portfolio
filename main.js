const open_first = document.getElementById('open_first');
const open_second = document.getElementById('open_second');
const open_third = document.getElementById('open_third');
const modal_container_first = document.getElementById('modal_container_first');
const modal_container_second = document.getElementById('modal_container_second');
const modal_container_third = document.getElementById('modal_container_third');
const close_first = document.getElementById('close_first');
const close_second = document.getElementById('close_second');
const close_third = document.getElementById('close_third');

open_first.addEventListener('click', () => {
  modal_container_first.classList.add('show');
})
open_second.addEventListener('click', () => {
  modal_container_second.classList.add('show');
})
open_third.addEventListener('click', () => {
  modal_container_third.classList.add('show');
})

close_first.addEventListener('click', () => {
  modal_container_first.classList.remove('show');
})
close_second.addEventListener('click', () => {
  modal_container_second.classList.remove('show');
})
close_third.addEventListener('click', () => {
  modal_container_third.classList.remove('show');
})
