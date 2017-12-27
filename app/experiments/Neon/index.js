import Experiments from '../../classes/Experiments'
import Circle from './Circle'

import {
  randomInteger,
  randomNormalized
} from '../../utils/random'

export default class Neon extends Experiments {
  constructor () {
    super()

    this.circles = null
    this.circlesLength = null
    this.circlesColor = null

    this.createCircles()

    this.update()
  }

  createCircle () {
    const x = this.mouse.x + (randomNormalized() * 200)
    const y = this.mouse.y + (randomNormalized() * 200)
    const radius = 10 + Math.abs(randomNormalized() * 10)
    const color = this.colors[this.circlesColor][randomInteger(0, this.colors.length - 1)]

    const circle = new Circle(x, y, radius, color)

    this.circles.push(circle)
  }

  destroyCircle (index) {
    this.circles.splice(index, 1)
  }

  createCircles () {
    this.circles = []
    this.circlesLength = 500
    this.circlesColor = randomInteger(0, this.colors.length - 1)

    for (let i = 0; i <= this.circlesLength; i++) {
      this.createCircle()
    }
  }

  update () {
    super.update()

    this.stats.begin()

    this.circles.forEach((circle, index) => {
      circle.move(this.mouse.x, this.mouse.y)
      circle.draw(this.context)

      if (!circle.alive) {
        this.destroyCircle(index)
        this.createCircle()
      }
    })

    this.context.globalAlpha = 1
    this.context.globalCompositeOperation = 'source-over'

    this.context.fillStyle = 'rgba(0, 0, 0, 0.1)'
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)

    this.stats.end()
  }

  dblclick () {
    super.dblclick()

    this.createCircles()
  }

  resize () {
    super.resize()

    this.createCircles()
  }
}
