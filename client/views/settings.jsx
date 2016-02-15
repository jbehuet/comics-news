Settings = React.createClass({
  getInitialState: function() {
    return {
        feeds:Feeds.find({}).fetch()
    };
  },
  renderTable() {
    var rows = [];
    this.state.feeds.forEach(function(feed){
        rows.push(<tr>
            <td>
                {feed.url}
            </td>
        </tr>)
    })
    
    
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  },
  render() {
    return (
        <div>
            <header>
                <h1>Settings</h1>
            </header>
            <div className="row">
                <div className="col-xs-12">
                    {this.renderTable()}
                </div>
            </div>
        </div>
    );
  }
});
