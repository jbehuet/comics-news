Posts = React.createClass({
    mixins: [ Reflux.connect(PostsStore, "data") ],
    render() {
        var rows = [];

        if (this.state.data){
            this.state.data.posts.forEach(function(post, id) {
              rows.push (
                <Post
                  key={id}
                  post={post}
                  isLast={this.state.data.posts.length - 1 == id} />
              );
            }.bind(this));

            return (
                <ul id="posts">
                  {rows}
                </ul>
            );
        } else { 
            return <p>Loading...</p>
        }
      } 
});
