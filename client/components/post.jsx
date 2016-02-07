Post = React.createClass({
  propTypes: {
        post: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {};
  },
  componentWillMount() {
  },
  render() {
    return (
            <li>
                <div className="articles-icon">
                    <img src="assets/images/boulet-logo_48.jpg" />
                </div>
                <div className="articles-content">
                  <h4 className="articles-name">
                    {this.props.post.title}
                  </h4>
                  {this.props.post.description}
                </div>
            </li>
    );
  }
});
