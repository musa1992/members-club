document.addEventListener('turbolinks:load', ()=> {
    var showPostUrl = "posts/"
    var posts = document.getElementsByClassName('post');
    
    if (posts.length > 0 ){
        for (var i = 0; i < posts.length; i++) {
            posts[i].addEventListener('click', function(e) {
                var postId = this.dataset.id
                var fullUrl = showPostUrl + postId
                if (e.target && e.target.className != "fa fa-comments") {
                    if (this.dataset.controller == "index"){
                        window.location.href = fullUrl; 
                    }
                     
                }
            })
        }
    }
    

})