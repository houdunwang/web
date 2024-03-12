import './style.scss'

window.onload = () => {
  const hd = document.querySelector<HTMLDivElement>('#hd')!
  // hd.innerHTML = hd?.clientWidth
  console.log(hd?.clientWidth)
  console.log(document.documentElement.clientWidth)

  const xj = document.querySelector<HTMLDivElement>('#xj')!
  console.log(xj?.clientWidth)
}
