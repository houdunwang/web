import './style.scss'
for (let i = 0; i < 100; i++) {
  const el = document.createElement('div')
  el.style.cssText =
    `--duration:` + (Math.random() * 50 + 10)
  document.body.appendChild(el)
}
