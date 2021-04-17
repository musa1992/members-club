document.addEventListener('turbolinks:load', ()=> {
    var showPostUrl = "posts/"
    var posts = document.getElementsByClassName('post');
    
    if (posts.length > 0 ){
        for (var i = 0; i < posts.length; i++) {
            posts[i].addEventListener('click', function(e) {
                var postId = this.dataset.id
                var fullUrl = showPostUrl + postId
                if (e.target && e.target.className == "fa fa-comments") {

                }else {
                    window.location.href = fullUrl;                    
                }
            })
        }
    }
    // window.onload = function (){
    //     var post = document.getElementsByClassName('post');
    //     for (var i = 0; i < post.length; i ++) {
    //                 post[i].addEventListener('click', function(e) {
    //                     var postId = this.dataset.id
        
    //                     if (e.target && e.target.className == "fa fa-comments"){
    //                         console.log("comment clicked")
    //                     }else{
    //                         window.location.href = showPostUrl + postId ;
    //                     }    
    //                 })
    //             }   
    // }

})