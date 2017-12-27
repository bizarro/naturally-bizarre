import Vector from '../../classes/Vector'

export default class Cell {
  constructor (x, y, angle) {
    this.angle = angle

    this.positionStart = new Vector(25 * x, 25 * y)
    this.positionEnd = new Vector(25 * Math.cos(this.angle), 25 * Math.sin(this.angle))
  }

  update (angle) {
    this.angle = angle

    this.positionEnd.x = 25 * Math.cos(this.angle)
    this.positionEnd.y = 25 * Math.sin(this.angle)
  }

  draw (context) {
    context.globalAlpha = 0.05

    context.beginPath()
    context.moveTo(this.positionStart.x, this.positionStart.y)
    context.lineTo(this.positionStart.x + this.positionEnd.x, this.positionStart.y + this.positionEnd.y)
    context.closePath()

    context.strokeStyle = '#fff'
    context.stroke()

    context.globalAlpha = 1
  }
}
