import Vector from '../../classes/Vector'

import {
  randomArbitrary
} from '../../utils/random'

export default class Mover {
  constructor (x, y, radius, color) {
    this.radius = radius

    this.color = color

    this.position = new Vector(x, y)
    this.velocity = new Vector(0, 0)
    this.acceleration = new Vector(0, 0)
    this.direction = new Vector(0, 0)

    this.multiplier = randomArbitrary(0.5, 1)
  }

  check () {
    if (this.position.x > window.innerWidth) {
      this.position.x = 0
    } else if (this.position.x < 0) {
      this.position.x = window.innerWidth
    }

    if (this.position.y > window.innerHeight) {
      this.position.y = 0
    } else if (this.position.y < 0) {
      this.position.y = window.innerHeight
    }
  }

  update (mouse, multiplier) {
    this.direction = Vector.sub(mouse, this.position)
    this.direction.normalize()
    this.direction.mult(this.multiplier)
    this.direction.mult(multiplier)

    this.acceleration = this.direction

    this.velocity.add(this.acceleration)
    this.velocity.limit(15)

    this.position.add(this.velocity)
  }

  draw (context) {
    this.check()

    context.globalCompositeOperation = 'lighter'

    context.beginPath()
    context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI)
    context.closePath()

    context.fillStyle = this.color
    context.fill()
  }
}
