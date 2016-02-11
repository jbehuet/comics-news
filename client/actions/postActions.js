PostsActions = Reflux.createActions([  
 'load'
]);

PostsActions.load.listen( function(url, success, error) {   
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20title%2Clink%2Cdescription%20from%20rss%20where%20url%3D%22" + encodeURIComponent(url) + "%22&format%3Dxml%22&format=json&diagnostics=true&callback=",
        function(data){
          if(data.query.results){
            success(data.query.results.item);
          } else {
            error();
          }
        }, "jsonp"
      );
});