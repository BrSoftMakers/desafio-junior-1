const nav = document.querySelector('main nav')
const toogle = document.querySelectorAll('nav .toggle')

for(const element of toogle){
  element.addEventListener('click', function (){
    nav.classList.toggle('show')
  })
}
