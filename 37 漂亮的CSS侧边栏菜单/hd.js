// const btn = document.querySelector('.icon')
// btn.addEventListener('click', () => {
//   btn.classList.toggle('toggle')
// })

const menus = document.querySelectorAll('menu ul li')
;[...menus].forEach((menu) => {
  menu.addEventListener('click', () => {
    menus.forEach((m) => m.classList.remove('active'))
    menu.classList.add('active')
  })
})
