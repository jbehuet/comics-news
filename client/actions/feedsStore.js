FeedsStore = Reflux.createStore({
    feeds: [],
    
    init: function(){
        this.get();
    },
    
    get: function() {
        this.feeds = Feeds.find().fetch();
        this.trigger(this.feeds);
    },
    
    add: function(feed){
        Feeds.insert(feed);
        
        this.feeds.push(feed);
        this.trigger(this.feeds);
    },
    
    update: function(){
        
    },
    
    delete: function(index){
        Feeds.remove(this.feeds[index]._id);
        
        this.feeds.splice(index, 1)
        this.trigger(this.feeds);
    }
        
});