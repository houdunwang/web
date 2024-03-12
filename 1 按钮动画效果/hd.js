const hd = document.querySelector('.hd')
Array(3)
  .fill(null)
  .forEach(() => {
    hd.insertAdjacentHTML('beforeend', '<div></div>')
  })

hd.addEventListener('click', () => {
  hd.classList.toggle('toggle')
})
