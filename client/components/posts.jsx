Posts = React.createClass({
    mixins: [ Reflux.connect(PostsStore, "data") ],
    render() {
        var rows = [];

        if (this.state.data){
            this.state.data.posts.forEach(function(post, id) {
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
        } else { 
            return <p>Loading...</p>
        }
      } 
});
