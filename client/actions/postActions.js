PostsActions = Reflux.createActions([  
 'load'
]);

PostsActions.load.listen( function(url, success, error) {  
    $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
            success(data);
        },
        error: function(){
            error();
        }
 });
});