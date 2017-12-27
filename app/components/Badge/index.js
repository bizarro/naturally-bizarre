import image from './image.png';
import styles from './styles.scss';

class BadgeManager {
  constructor () {
    this.element = document.createElement('div')
    this.element.className = styles.badge

    this.element.innerHTML = `
      <img src="${image}" class="${styles.badge__image}">
    `

    document.body.appendChild(this.element)
  }
}

export const Badge = new BadgeManager()
