// A container component for basic views to be rendered in
App = React.createClass({
  render() {
    return (
      <div>
       <nav className="navbar navbar-default navbar-static-top">
            <div className="container">
                <div className="navbar-header">
                    <a href="/" className="navbar-brand">Comics News</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse navbar-right">
                    <ul className="nav navbar-nav">
                        <li><a href="/about">About</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
          {/* Views will be rendered here */}
          {this.props.children}
        </div>
      </div>
    );
  }
});

$(document).ready(function() {
    ReactDOM.render(<Routes/>, document.getElementById('app'));
});