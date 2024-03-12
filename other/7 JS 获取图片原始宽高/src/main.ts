import './style.css'

const img = new Image()

import('./xj.jpg')
  .then((jpg) => (img.src = jpg.default))
  .then(() => {
    img.onload = () => {
      const width = img.naturalWidth
      const height = img.naturalHeight
      console.log(width, height)
    }
  })
