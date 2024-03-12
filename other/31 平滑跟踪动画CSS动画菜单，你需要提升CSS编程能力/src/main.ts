import './style.scss'

const main = document.querySelector('main')

const sections = main?.querySelectorAll('section')!

const setClass = (section: HTMLElement) => {
  sections.forEach((section) =>
    section.classList.remove('active'),
  )
  section.classList.add('active')
}
sections.forEach((section, index) => {
  section.addEventListener('click', () => {
    setClass(section)
    const div =
      main?.querySelector<HTMLDivElement>('nav>div')!
    div.style.cssText = `left:${80 * index}px`
  })
})
