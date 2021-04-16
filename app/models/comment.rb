class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :post

  def username
    User.find(self.user_id).email
  end
end
