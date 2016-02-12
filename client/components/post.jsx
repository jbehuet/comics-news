Post = React.createClass({
  propTypes: {
        post: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {};
  },
  componentWillMount() {
  },
  handleClick: function(e){
    $(e.currentTarget).find('.articles-body').toggle();
  },
  rawMarkup: function(props) {
    return { __html: props };
  },
  render() {
    return (
            <li onClick={this.handleClick}>
                <div className="articles-icon">
                    <img src="assets/images/comics-ico.png" />
                </div>
                <div className="articles-icon-right">
                    <span className="fui-triangle-down"></span>
                </div>
                <div className="articles-content">
                  <h4 className="articles-name">
                    {this.props.post.title}
                  </h4>
                  <a href={this.props.post.link} target="_blank">Voir l'article</a>
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
