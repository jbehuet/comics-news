Post = React.createClass({
  propTypes: {
        post: React.PropTypes.object.isRequired,
        isLast: React.PropTypes.bool.isRequired
  },
  getInitialState: function() {
    return {
        expanded:true
    };
  },
  componentWillMount() {
  },
  handleClick: function(e){
    this.setState({expanded: !this.state.expanded});
    $(e.currentTarget).find('.articles-body').toggle();
  },
  rawMarkup: function(props) {
    return { __html: props };
  },
  getDomain: function(url){ 
    return url.match(/(http||https)?\:\/\/([^\/:?#]+)(?:[\/:?#]|$)/g)[0];
  },
  render() {
    return (
            <li onClick={this.handleClick} className={this.props.isLast ? 'last' : ''}>
                <div className="articles-icon">
                    <img src={"http://www.google.com/s2/favicons?domain=" + this.getDomain(this.props.post.link)} />
                </div>
                <div className="articles-icon-right">
                    <span className={this.state.expanded ? 'fui-triangle-up' : 'fui-triangle-down' }></span>
                </div>
                <div className="articles-content">
                  <h4 className="articles-name">
                    {this.props.post.title}
                  </h4>
                  <a href={this.props.post.link} target="_blank">Voir l'article d'origine</a>
                  <br />
                  <div className="articles-body">
                      <div dangerouslySetInnerHTML={this.rawMarkup(this.props.post.description)} />
                      <div dangerouslySetInnerHTML={this.rawMarkup(this.props.post.encoded)} />
                  </div>
                </div>
            </li>
    );
  }
});
