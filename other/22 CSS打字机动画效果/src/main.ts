import './style.scss'

const app = document.querySelector<HTMLDivElement>('#app')!
const stringLength = [...app.innerText].length

const styleElement = document.createElement('style')
document.head.appendChild(styleElement)

styleElement.sheet?.insertRule(
  `#app::before {animation: typewriter ${stringLength * 0.2}s steps(${stringLength}) forwards}`,
)
styleElement.sheet?.insertRule(
  `#app::after {animation: typewriter ${
    stringLength * 0.2
  }s steps(${stringLength}) forwards, flashing 0.3s ease-out forwards infinite`,
)
