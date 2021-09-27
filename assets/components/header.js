class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <i class="fas fa-bars d-block d-md-none" id="openMobileMenu"></i>
        <header class="d-none d-md-block p-3">
        <div class="d-flex flex-column h-100 justify-content-between">
          <div>
            <nav>
              <ul class="m-0 p-0">
                <li class="d-block"><a href="index.html">home</a></li>
                <li class="d-block"><a href="index.html#portfolio">portfolio</a></li>
                <li class="d-block"><a href="index.html#aboutme">about me</a></li>
                <li class="d-block"><a href="cv.html">CV</a></li>
                <li class="d-block"><a href="index.html#extras">extras</a></li>
              </ul>
            </nav>
          </div>
          <div class="text-center">
            <a href="https://www.linkedin.com/in/petra-gergely-2301/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin icon-md icon-muted m-3"></i></a>
            <a href="https://github.com/petra2301" target="_blank" rel="noreferrer"><i class="fab fa-github-square icon-md icon-muted m-3"></i></a>
            <a href="https://codepen.io/petra2301" target="_blank" rel="noreferrer"><i class="fab fa-codepen icon-md icon-muted m-3"></i></a>
            <a href="https://www.instagram.com/frontendfairycph/" target="_blank" rel="noreferrer"><i class="fab fa-instagram icon-md icon-muted m-3"></i></a>
          </div>
        </div>
      </header>
        `;
      }
  }

  
customElements.define('header-component', Header);