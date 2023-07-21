class FlipClock {
  main
  nums
  divs
  constructor(el) {
    this.main = document.querySelector(el)
  }

  render() {
    this.clock()
    setInterval(() => {
      this.getTimes()
      this.updateDivNumber()
    }, 20)
  }

  updateDivNumber() {
    this.divs.forEach((divs, index) => {
      divs.forEach((div) => {
        const num = this.nums[index]
        //3 4
        if (div.dataset.before != num) {
          div.classList.add('flipDown')
        }
        div.addEventListener('animationend', () => {
          divs.forEach((div) => {
            div.dataset.before = num
            const after = num + 1
            if (index % 2) {
              div.dataset.after = after > 9 ? 0 : after
            } else {
              div.dataset.after = after > 6 ? 0 : after
            }
          })
          div.classList.remove('flipDown')
        })
      })
    })
  }

  clock() {
    this.getTimes()
    this.createSectionElement()
    this.getDivs()
  }

  getDivs() {
    this.divs = Array.from(
      this.main.querySelectorAll('section'),
    ).map((section) => section.querySelectorAll('div'))
  }

  getTimes() {
    this.nums = new Date()
      .toLocaleTimeString()
      .replaceAll(':', '')
      .split('')
      .map((n) => +n)
  }

  createSectionElement() {
    this.nums.forEach((num, index) => {
      this.main.insertAdjacentHTML(
        'beforeend',
        `
			<section>
				<div data-before="" data-after=""></div>
				<div data-before="" data-after=""></div>
			</section> 
		`,
      )
      if (index % 2 && index != this.nums.length - 1) {
        this.main.insertAdjacentHTML('beforeend', '<p></p>')
      }
    })
  }
}

const instance = new FlipClock('#hd')
instance.render()
