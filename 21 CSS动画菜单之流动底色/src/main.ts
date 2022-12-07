import './style.scss'
const app = document.querySelector<HTMLDivElement>('#app')!
app.insertAdjacentHTML('beforeend', '<div></div>')
const mask = app.querySelector<HTMLDivElement>('div:last-child')

app.querySelectorAll('div').forEach((div) => {
  div.addEventListener('mouseenter', (e: Event) => {
    const el = e.target as HTMLDivElement
    mask?.style.setProperty('left', el.offsetLeft + 'px')
    mask?.style.setProperty('width', el.offsetWidth + 'px')
  })
})
