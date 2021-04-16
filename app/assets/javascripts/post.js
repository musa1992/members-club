document.addEventListener('turbolinks:load', ()=> {
    var showPostUrl = "posts/"
    if (document.readyState === 'complete') {
        var post = document.getElementsByClassName('post');

        for (var i = 0; i < post.length; i ++) {
            post[i].addEventListener('click', function(e) {
                var postId = this.dataset.id

                if (e.target && e.target.className == "fa fa-comments"){
                    console.log("comment clicked")
                }else{
                    window.location.href = showPostUrl + postId ;
                }    
            })
        }
    }
})