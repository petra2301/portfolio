class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
        <div class="d-flex flex-column h-100 justify-content-between p-2">
          <div>
            <nav>
              <ul class="m-0 p-0">
                <li class="d-block"><a href="#">home</a></li>
                <li class="d-block"><a href="#portfolio">portfolio</a></li>
                <li class="d-block"><a href="#aboutme">about me</a></li>
                <li class="d-block"><a href="#">CV</a></li>
              </ul>
            </nav>
          </div>
          <div class="text-center">
            <a href="#"><i class="fab fa-linkedin icon-md icon-muted m-3"></i></a>
            <a href=""><i class="fab fa-github-square icon-md icon-muted m-3"></i></a>
            <a href=""><i class="fab fa-codepen icon-md icon-muted m-3"></i></a>
            <a href=""><i class="fab fa-instagram icon-md icon-muted m-3"></i></a>
          </div>
        </div>
      </header>
        `;
      }
  }

  
customElements.define('header-component', Header);