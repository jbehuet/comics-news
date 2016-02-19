Settings = React.createClass({
  getInitialState: function() {
    return {
        feedForm:''
    };
  },
  handleChangeFeedForm(event){
    this.setState({feedForm: event.target.value});  
  },
  handleSubmit(){
      FeedsStore.add({url: this.state.feedForm});
      $("#feedModal").modal('hide');
  },
  renderTable() {
    return (
        <div>
            <FeedsList />
            <div id="feedModal" className="modal fade" tabIndex="-1" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h4 className="modal-title">Add / Edit</h4>
                        </div>
                        <form id="feedForm" method="post">
                            <div className="modal-body">
                                <div className="form-group">
                                    <input type="text" name="url" value={this.state.feedForm} onChange={this.handleChangeFeedForm} placeholder="URL" className="form-control" />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal"><span className="fui-cross-circle"></span></button>
                                <button type="button" className="btn btn-primary" onClick={this.handleSubmit}><span className="fui-check-circle"></span></button>
                            </div>
                        </form>
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
