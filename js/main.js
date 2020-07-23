function menu(){
  let navbar = document.querySelector('#navbar');
  navbar.classList.toggle('d-none');
}

function rotate90(e, str1){
  e.currentTarget.classList.toggle('rotate-90');
  console.log(str1);
}