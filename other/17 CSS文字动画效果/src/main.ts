import './style.scss'

class RandColorAnimation {
  constructor(private app: HTMLDivElement, private text = [...app.innerHTML]) {
    this.app.innerHTML = ''
  }
  private randomColorValue() {
    let arr = [5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f']
    return arr[Math.floor(Math.random() * arr.length)]
  }

  private color() {
    return (
      '#' +
      Array(6)
        .fill(null)
        .map((_) => this.randomColorValue())
        .join('')
    )
  }

  public run() {
    this.text.forEach((str: string, i: number) => {
      this.app.insertAdjacentHTML(
        'beforeend',
        ` <div style="color:${this.color()};animation-delay: ${i * 0.1}s">${str}</div>`,
      )
    })
  }
}

new RandColorAnimation(document.querySelector<HTMLDivElement>('#app')!).run()
