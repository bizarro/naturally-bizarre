import styles from './styles.scss';

export default class Navigation {
  constructor (names) {
    this.element = document.createElement('nav')
    this.element.className = styles.navigation

    this.element.innerHTML = `
      <ul class="${styles.navigation__list}">
        ${names.map(experiment => {
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
  }

  onHashChange (hash) {
    this.elements.buttons.forEach(button => {
      if (button.getAttribute('href') === hash) {
        button.classList.add(styles['navigation__button--active'])
      } else {
        button.classList.remove(styles['navigation__button--active'])
      }
    })
  }
}
