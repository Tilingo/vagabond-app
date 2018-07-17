class Post < ApplicationRecord
  belongs_to :city, :user
end
