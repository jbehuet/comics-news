Posts = React.createClass({  
  getInitialState: function() {
    return {
        posts:[
            {
                title:'Installer Windows…', 
                description:'...'
            },
            {
                title:'Le Bouletmaton', 
                description:'...'
            }]
    };
  },
  renderPostsList: function() {
    var rows = [];

    this.state.posts.forEach(function(post, id) {
      rows.push (
        <Post
          key={id}
          post={post} />
      );
    }.bind(this));
      
    return (
        <ul>
          {rows}
        </ul>
    );
  },
    
  render() {
    return (
        <div>
            {this.renderPostsList()}
        </div>
    );
  }
});
