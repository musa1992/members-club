class Post < ApplicationRecord
  belongs_to :user
  has_many :comments, dependent: :destroy

  def username
    User.find(self.user_id).email
  end

  def comments_count
    self.comments.all.count
  end
end
