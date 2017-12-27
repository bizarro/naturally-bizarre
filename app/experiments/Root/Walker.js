import {
  randomInteger
} from '../../utils/random'

export default class Walker {
  constructor (color, x, y) {
    this.color = color
    this.x = x
    this.y = y
  }

  step () {
    const random = randomInteger(0, 3)

    if (random === 0) {
      this.x++
    } else if (random === 1) {
      this.x--
    } else if (random === 2) {
      this.y++
    } else {
      this.y--
    }
  }

  draw (context) {
    context.lineWidth = 1
    context.strokeStyle = this.color

    context.beginPath()
    context.moveTo(this.x, this.y)

    this.step()

    context.lineTo(this.x, this.y)
    context.stroke()
  }
}
