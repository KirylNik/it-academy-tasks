class ShowUserInfo extends HTMLElement {
    constructor() {
      super()
  
      const shadow = this.attachShadow({mode: 'open'});
      const name = this.getAttribute('name')
      const age = this.getAttribute('age')
      const nameElem = document.createElement('span')
      const ageElem = document.createElement('span')
      const style = document.createElement('style')

      nameElem.setAttribute('class','user-info')
      ageElem.setAttribute('class','user-info')
      nameElem.textContent = name
      ageElem.textContent = age
  
      style.textContent = `.user-info {
                              padding: 10px 20px;
                            }`
  
      shadow.appendChild(style);
      shadow.appendChild(nameElem);
      shadow.appendChild(ageElem);
    }
  }
  
  customElements.define('show-user-info', ShowUserInfo)