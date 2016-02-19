PostsStore = Reflux.createStore({
    listenables: PostsActions,    
    data: {},
    
    init: function() {
        var feeds = FeedsStore.feeds;
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