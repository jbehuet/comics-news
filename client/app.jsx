// A container component for basic views to be rendered in
App = React.createClass({
  render() {
    return (
      <div>
       <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a href="/" className="navbar-brand">Comics News</a>
                </div>
                <div id="navbar" className="navbar-collapse collapse navbar-right" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        <li><a href="/settings"><span className='fui-gear'></span> Settings</a></li>
                        <li><a href="/about"><span className='fui-info-circle'></span> About</a></li>
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