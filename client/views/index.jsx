Index = React.createClass({  
  getInitialState: function() {
    return {};
  },
  componentWillMount() {
  },
  render() {
    return (
        <div>
            <h1>Lastest</h1>
            <div className="row">
                <div className="articles col-xs-12">
                <Posts />
                </div>
            </div>
        </div>
    );
  }
});
