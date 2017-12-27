import { App } from '../App'

import styles from './styles.scss';

class NavigationManager {
  constructor () {
    this.element = document.createElement('nav')
    this.element.className = styles.navigation

    this.element.innerHTML = `
      <ul class="${styles.navigation__list}">
        ${App.names.map(experiment => {
          return `
          <li class="${styles.navigation__item}">
            <a href="#${experiment}" class="${styles.navigation__button}">
              ${experiment}
            </a>
          </li>
          `
        }).join('')}
      </ul>
    `

    this.elements = {
      buttons: this.element.querySelectorAll('a')
    }

    document.body.appendChild(this.element)

    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  onHashChange () {
    const hash = window.location.hash

    this.elements.buttons.forEach(button => {
      if (button.getAttribute('href') === hash) {
        button.classList.add(styles['navigation__button--active'])
      } else {
        button.classList.remove(styles['navigation__button--active'])
      }
    })
  }
}

export const Navigation = new NavigationManager()
