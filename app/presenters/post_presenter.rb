class PostPresenter
    def initialize(post)
        @post = post
    end

    def username
        User.find(@post.user_id).email
    end

    def date_posted
        @post.created_at
    end

end