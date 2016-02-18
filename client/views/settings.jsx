Settings = React.createClass({
  getInitialState: function() {
    return {
        feeds:[],
        feedForm:''
    };
  },
  componentWillMount() {
    this.state.feeds = Feeds.find().fetch();
  },
  handleChangeFeedForm(){
    this.setState({feedForm: event.target.value});  
  },
  renderTable() {
    var rows = [];
    this.state.feeds.forEach(function(feed, id){
        rows.push(<tr key={id}>
            <td>
                {feed.url}
            </td>
            <td className="col-action">
                <button className="btn btn-danger"><span className='fui-trash'></span></button>
            </td>
        </tr>)
    })
    
    
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>URL</th>
              <th className="col-action"><button className="btn btn-primary" data-toggle="modal" data-target="#myModal"><span className='fui-plus'></span></button></th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
        
        <div id="myModal" className="modal fade" tabIndex="-1" role="dialog">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 className="modal-title">Add / Edit</h4>
                    </div>
                <div className="modal-body">
                    <div className="form-group">
                        <input type="text" value={this.state.feedForm} onChange={this.handleChangeFeedForm} placeholder="URL" className="form-control" />
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-default" data-dismiss="modal"><span className="fui-cross-circle"></span></button>
                    <button type="button" className="btn btn-primary"><span className="fui-check-circle"></span></button>
                </div>
            </div>
            </div>
        </div>
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
