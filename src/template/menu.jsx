export default props => (
  <nav className="navbar navbar-inverse bg-inverse">
    <div className="container">
      <div className="navbar-header">
        <a className="navbar-brand" href="#">
          <i className="far fa-newspaper"></i> WP
        </a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#/noticias">Noticias</a></li>
          <li><a href="#/about">Sobre</a></li>
        </ul>
      </div>
    </div>
  </nav>
)