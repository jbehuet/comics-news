PostsStore = Reflux.createStore({
    listenables: PostsActions,    
    data: {},
    
    init: function() {
        // Load Boulet
        PostsActions.load('http://www.bouletcorp.com/feed/', this.onLoadSuccess, this.onLoadError);
    },
    
    onLoad: function() {
        this.data.posts = [];
        this.data.loadError = null;
        
        this.trigger(this.data);
    },
    
    onLoadSuccess: function(res) {
        console.log(res);
        this.data.posts[0] = {
            title: res.firstChild.childNodes[1].childNodes[19].getElementsByTagName('title')[0].textContent,
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