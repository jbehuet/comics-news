PostsStore = Reflux.createStore({
    listenables: PostsActions,    
    data: {},
    
    init: function() {
        var urls = ['http://www.bouletcorp.com/feed/', 'http://www.paka-blog.com/feed/', 'http://www.smbc-comics.com/rss.php'];
        urls.forEach(function(url, id){
            PostsActions.load(url, this.onLoadSuccess, this.onLoadError);
        }.bind(this));
    },
    
    onLoad: function() {
        this.data.posts = [];
        this.data.loadError = null;
        
        this.trigger(this.data);
    },
    
    onLoadSuccess: function(res) {
       this.data.posts[this.data.posts.length] = {
            title: res[0].title,
            description: "..."
        };
        this.data.loadError = false;
        
        console.log(this.data);
        this.trigger(this.data);
    },
    
    onLoadError: function() {
        this.data.loadError = "Could not load review.";
        
        this.trigger(this.data);
    }
    
});