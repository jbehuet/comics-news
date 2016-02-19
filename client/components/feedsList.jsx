FeedsList = React.createClass({
  mixins: [Reflux.listenTo(FeedsStore, "onFeedsStoreChange")],
  getInitialState: function() {
    return {
        feeds: FeedsStore.feeds || []
    };
  },
  onFeedsStoreChange: function(storeData){
    this.setState({feed: storeData});
  },
  render(){
    var rows = [];
    this.state.feeds.forEach(function(feed, id){
        rows.push(<Feed key={id} index={id} feed={feed} />)
    })
    
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
              <th className="col-action"><button className="btn btn-primary" data-toggle="modal" data-target="#feedModal"><span className='fui-plus'></span></button></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  },
})