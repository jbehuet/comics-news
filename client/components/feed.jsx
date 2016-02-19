Feed = React.createClass({
  propTypes: {
        index: React.PropTypes.number.isRequired,
        feed: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
    };
  },
  handleDelete: function(e){
      FeedsStore.delete(this.props.index);
  },
  render() {
    return (
            <tr>
                <td>
                    {this.props.feed.url}
                </td>
                <td className="col-action">
                    <button className="btn btn-danger" onClick={this.handleDelete}><span className='fui-trash'></span></button>
                </td>
            </tr>
    );
  }
});
