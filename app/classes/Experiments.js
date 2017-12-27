import Colors from '../data/colors.json'
import Stats from 'stats-js'
import Vector from './Vector'

export default class Experiments {
  constructor () {
    this.colors = Colors

    this.stats = null
    this.canvas = null
    this.context = null

    this.center = new Vector(window.innerWidth / 2, window.innerHeight / 2)
    this.mouse = new Vector(window.innerWidth / 2, window.innerHeight / 2)

    this.eventDown = this.mousedown.bind(this)
    this.eventMove = this.mousemove.bind(this)
    this.eventUp = this.mouseup.bind(this)

    this.eventClick = this.click.bind(this)
    this.eventClickDouble = this.dblclick.bind(this)

    this.eventResize = this.resize.bind(this)

    this.eventUpdate = this.update.bind(this)

    this.animationFrame = null

    this.createStats()
    this.createCanvas()
    this.createContext()
    this.createEvents()
  }

  createStats () {
    this.stats = new Stats()

    this.stats.domElement.style.display = 'none'
    this.stats.domElement.style.left = 0
    this.stats.domElement.style.position = 'absolute'
    this.stats.domElement.style.top = 0
    this.stats.domElement.style.zIndex = 50

    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 68) {
        this.stats.domElement.style.display = (this.stats.domElement.style.display === 'block') ? 'none' : 'block'
      }
    })

    document.body.appendChild(this.stats.domElement)
  }

  createCanvas () {
    this.canvas = document.createElement('canvas')
    this.canvas.classList.add('canvas')

    this.canvas.height = window.innerHeight
    this.canvas.width = window.innerWidth

    document.body.appendChild(this.canvas)
  }

  createContext () {
    this.context = this.canvas.getContext('2d')

    this.context.fillStyle = '#050505'
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

  createEvents () {
    this.canvas.addEventListener('mousedown', this.eventDown)
    this.canvas.addEventListener('mousemove', this.eventMove)
    this.canvas.addEventListener('mouseup', this.eventUp)

    this.canvas.addEventListener('touchstart', this.eventDown)
    this.canvas.addEventListener('touchmove', this.eventMove)
    this.canvas.addEventListener('touchend', this.eventUp)

    this.canvas.addEventListener('click', this.eventClick)
    this.canvas.addEventListener('dblclick', this.eventClickDouble)

    window.addEventListener('resize', this.eventResize)
  }

  click (e) {

  }

  dblclick (e) {
    this.context.globalAlpha = 1
    this.context.globalCompositeOperation = 'source-over'

    this.context.fillStyle = '#050505'
    this.context.fillRect(0, 0, window.innerWidth, window.innerHeight)
  }

  mousedown (e) {

  }

  mousemove (e) {
    if (e.touches) {
      this.mouse.set(e.touches[0].pageX, e.touches[0].pageY)
    } else {
      this.mouse.set(e.pageX, e.pageY)
    }
  }

  mouseup (e) {

  }

  resize () {
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight

    this.center.set(window.innerWidth / 2, window.innerHeight / 2)
  }

  update () {
    this.animationFrame = window.requestAnimationFrame(this.update.bind(this))
  }

  destroyStats () {
    this.stats.domElement.parentNode.removeChild(this.stats.domElement)
  }

  destroyCanvas () {
    this.canvas.parentNode.removeChild(this.canvas)
  }

  destroyContext () {
    this.context = null
  }

  destroyEvents () {
    this.canvas.removeEventListener('mousedown', this.eventDown)
    this.canvas.removeEventListener('mousemove', this.eventMove)
    this.canvas.removeEventListener('mouseup', this.eventUp)

    this.canvas.removeEventListener('touchstart', this.eventDown)
    this.canvas.removeEventListener('touchmove', this.eventMove)
    this.canvas.removeEventListener('touchend', this.eventUp)

    this.canvas.removeEventListener('click', this.eventClick)
    this.canvas.removeEventListener('dblclick', this.eventClickDouble)

    window.removeEventListener('resize', this.eventResize)
  }

  destroy () {
    window.cancelAnimationFrame(this.animationFrame)

    this.destroyEvents()
    this.destroyCanvas()
    this.destroyContext()
    this.destroyStats()
  }
}
