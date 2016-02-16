Index = React.createClass({  
  getInitialState: function() {
    return {};
  },
  componentWillMount() {
  },
  render() {
    return (
        <div>
            <div className="row" id="list-header">
               <div className="col-md-6 title">
                   <h1>Lastest</h1>
               </div>
            </div>
            <div className="row">
                <div className="articles col-xs-12">
                <Posts />
                </div>
            </div>
        </div>
    );
  }
});
