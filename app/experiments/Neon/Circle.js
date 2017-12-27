import {
  constrain,
  lerp
} from '../../utils/math'

import {
  randomArbitrary
} from '../../utils/random'

export default class Circle {
  constructor (x, y, radius, color) {
    this.radius = radius

    this.color = color

    this.x = x
    this.y = y

    this.opacity = 0

    this.lerp = randomArbitrary(0.05, 0.1)
  }

  move (x, y) {
    this.opacity = constrain(this.opacity + 0.1, 0, 1)

    this.radius = lerp(this.radius, 0, this.lerp)

    this.x = lerp(this.x, x, this.lerp)
    this.y = lerp(this.y, y, this.lerp)

    this.alive = this.radius > 0.01
  }

  draw (context) {
    context.lineWidth = 2

    context.globalAlpha = this.opacity
    context.globalCompositeOperation = 'lighter'

    context.beginPath()
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
    context.closePath()

    context.strokeStyle = this.color
    context.stroke()
  }
}
