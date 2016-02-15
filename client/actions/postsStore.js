PostsStore = Reflux.createStore({
    listenables: PostsActions,    
    data: {},
    
    init: function() {
        //var urls = ['http://www.commitstrip.com/fr/feed/', 'http://www.bouletcorp.com/feed/', 'http://www.paka-blog.com/feed/', 'http://www.smbc-comics.com/rss.php'];
        var feeds = Feeds.find({}).fetch();
        feeds.forEach(function(feed, id){
            PostsActions.load(feed.url, this.onLoadSuccess, this.onLoadError);
        }.bind(this));
    },
    
    onLoad: function() {
        this.data.posts = [];
        this.data.loadError = null;
        
        this.trigger(this.data);
    },
    
    onLoadSuccess: function(res) {
       this.data.posts[this.data.posts.length] = res[0];
        this.data.loadError = false;
        
        this.trigger(this.data);
    },
    
    onLoadError: function() {
        this.data.loadError = "Could not load review.";
        
        this.trigger(this.data);
    }
    
});